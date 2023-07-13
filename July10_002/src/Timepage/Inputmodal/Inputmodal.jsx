// 입력 모달

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { timeTableState } from '../store/store';
import { v4 as uuidv1 } from 'uuid';
import { useEffect } from 'react';

// 배열에 시간 값 넣기
// 9시부터 20시까지
const timeOptions = new Array(12).fill(null).map((e, i) => ({
    value: i + 9,
    label: i + 9,
}));

// 비시작이 에이시작보다 작으면 비끝이 에이시작보다 큰거고 그렇지않으면 비시작이 에이끝보다 작다고?
const checkOverLap = (A, B) =>
    B.start < A.start ? B.end > A.start : B.start < A.end;


function Inputmodal({
    showModal,
    handleClose, //닫기,,?
    dayData = 'mon', //요일
    startTimeData = 9, // 시작시간
    endTimeData = 10, // 종료시간
    lectureNameData = '', // 강의명
    professorNameData = '', // 교수명
    lectureRoomData = '', // 강의실
    colorData = '#FFFFFF', // 색
    idNum,
}) {
    const {
        formState: { errors },
        control,
        getValues,
        handleSubmit,
        reset,
    } = useForm();

    //useRecoilState : atom의 값을 읽고 쓰려고 할 때 사용, 상태가 업데이트되면 자동적으로 리렌더링
    const [timeTableData, setttimeTableData] = useRecoilState(timeTableState);
    useEffect(() => {
        if (showModal) {
            //초기값,, 그런느낌,,
            reset({
                lectureName: lectureNameData,
                professorName: professorNameData,
                lectureRoom: lectureRoomData,
                day: dayData,
                startTime: startTimeData,
                endTime: endTimeData,
                lectureColor: colorData,
            });
        }
    }, [
        showModal,
        lectureNameData,
        professorNameData,
        lectureRoomData,
        dayData,
        startTimeData,
        endTimeData,
        colorData,
        reset,
    ]);


    // useCallback은 첫번째 인자로 넘어온 함수를, 두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 변경될 때 까지 저장해놓고 재사요할 수 있게
    const Submit = useCallback(
        ({ lectureName, professorName, lectureRoom, day, startTime, endTime, lectureColor }) => {
            let valid = true;
            for (let index = 0; index < timeTableData[day].length; index++) {
                if (
                    checkOverLap(timeTableData[day][index], {
                        start: startTime,
                        end: endTime,
                    })
                ) {
                    valid = false;
                    break;
                }
            }

            if (!valid) {
                alert('중복');
                return;
            }

            const data = {
                start: startTime,
                end: endTime,
                name: lectureName,
                pro: professorName,
                room: lectureRoom,
                color: lectureColor,
                id: uuidv1(),
            };


            setttimeTableData((oldTimeData) => ({
                ...oldTimeData,
                [day]: [...oldTimeData[day], data],
            }));

            handleClose();
        },
        [handleClose, setttimeTableData, timeTableData],
    );


    // 위에랑 비슷하게 시간표를 수정할 때
    const Edit = useCallback(
        ({ lectureName, professorName, lectureRoom, day, startTime, endTime, lectureColor }) => {
            let valid = true;

            for (let index = 0; index < timeTableData[day].length; index++) {
                if (
                    checkOverLap(timeTableData[day][index], {
                        start: startTime,
                        end: endTime,
                    }) &&
                    timeTableData[day][index]['id'] !== idNum
                ) {
                    valid = false;
                    break;
                }
            }

            if (!valid) {
                alert('중복');
                return;
            }

            //data.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
            // = data.id 가 idNum 인 것을 제거함
            // 약간 수정할 때 기존 데이터는 필요 없으니까 filter사용해서 삭제해준다 요런 느낌
            const filteredDayData = [
                ...timeTableData[dayData].filter((data) => data.id !== idNum),
            ];

            // 필터 거친 dayData로 새로운 timetabledata~
            const newTimeTableData = {
                ...timeTableData,
                [dayData]: filteredDayData,
            };

            // 
            const newDayData = [
                ...newTimeTableData[day],
                {
                    start: startTime,
                    end: endTime,
                    id: idNum,
                    name: lectureName,
                    pro: professorName,
                    room: lectureRoom,
                    color: lectureColor,
                },
            ];

            setttimeTableData({
                ...newTimeTableData,
                [day]: newDayData,
            });

            handleClose();
        },
        [dayData, handleClose, idNum, setttimeTableData, timeTableData],
    );

    return (
        <Dialog open={showModal} onClose={handleClose}>
            <form onSubmit={handleSubmit(idNum ? Edit : Submit)}>
                <DialogTitle align="center"> 강의 정보 입력</DialogTitle>
                <DialogContent style={{ width: '400px' }}>
                    
                    {/* 강의명 입력란 */}
                    <Controller
                        control={control}
                        name="lectureName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                error={!!errors.lectureName}
                                style={{ marginTop: '30px', width: '350px' }}
                                autoComplete="off"
                                label="강의명"
                            />
                        )}
                    />
                    {/* 강의명 입력 X시 오류메시지 */}
                    {errors.lectureName?.type === 'required' && (
                        <p style={{ color: '#d32f2f' }}>입력하세요</p>
                    )}

                    {/* 교수명 입력란 */}
                    <Controller
                        control={control}
                        name="professorName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                error={!!errors.professorName}
                                style={{ marginTop: '30px', width: '350px' }}
                                autoComplete="off"
                                label="교수명"
                            />
                        )}
                    />
                    {/* 교수명 입력 X시 오류메시지 */}
                    {errors.professorName?.type === 'required' && (
                        <p style={{ color: '#d32f2f' }}>입력하세요</p>
                    )}

                    {/* 강의실 입력란 */}
                    <Controller
                        control={control}
                        name="lectureRoom"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                error={!!errors.lectureRoom}
                                style={{ marginTop: '30px', width: '350px' }}
                                autoComplete="off"
                                label="강의실"
                            />
                        )}
                    />
                    {/* 강의실 입력 X시 오류메시지 */}
                    {errors.lectureRoom?.type === 'required' && (
                        <p style={{ color: '#d32f2f' }}>입력하세요</p>
                    )}

                    {/* 요일 선택 */}
                    <FormControl style={{ marginTop: '30px' }}>
                        <FormLabel>요일</FormLabel>
                        <Controller
                            control={control}
                            name="day"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <RadioGroup {...field} style={{ display: 'block' }}>
                                    <FormControlLabel
                                        value="mon"
                                        control={<Radio />}
                                        label="월"
                                    />
                                    <FormControlLabel
                                        value="tue"
                                        control={<Radio />}
                                        label="화"
                                    />
                                    <FormControlLabel
                                        value="wed"
                                        control={<Radio />}
                                        label="수"
                                    />
                                    <FormControlLabel
                                        value="thu"
                                        control={<Radio />}
                                        label="목"
                                    />
                                    <FormControlLabel
                                        value="fri"
                                        control={<Radio />}
                                        label="금"
                                    />
                                </RadioGroup>
                            )}
                        />
                        {/* 요일 선택 X시 오류메시지 */}
                        {errors.day?.type === 'required' && (
                            <p style={{ color: '#d32f2f' }}>선택하세요</p>
                        )}
                    </FormControl>

                    {/* 시작 시간 선택 */}
                    <Stack spacing={3} style={{ marginTop: '30px', width: '350px' }}>
                        <Controller
                            control={control}
                            name="startTime"
                            rules={{
                                required: true,
                                //종료 시간보다 작아야해
                                validate: (value) => getValues('endTime') > value,
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    error={
                                        !!errors.startTime ||
                                        !!(errors.endTime?.type === 'validate')
                                    }
                                    style={{ marginTop: '30px', width: '350px' }}
                                    label="시작 시간"
                                >
                                    {timeOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        {/* 시작 시간 선택 X시 오류메시지 */}
                        {errors.startTime?.type === 'required' && (
                            <p style={{ color: '#d32f2f' }}>시작시간</p>
                        )}
                        {/* 종료 시간보다 클 시 오류메시지 */}
                        {errors.startTime?.type === 'validate' && (
                            <p style={{ color: '#d32f2f' }}>시간을 다시 확인하세요.</p>
                        )}

                        {/* 종료 시간 선택 */}
                        <Controller
                            control={control}
                            name="endTime"
                            rules={{
                                required: true,
                                //시작 시간보다 커야해
                                validate: (value) => getValues('startTime') < value,
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    error={!!errors.endTime}
                                    style={{ marginTop: '30px', width: '350px' }}
                                    label="종료 시간"
                                >
                                    {timeOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        {/* 종료 시간 선택 X시 오류메시지 */}
                        {errors.endTime?.type === 'required' && (
                            <p style={{ color: '#d32f2f' }}>종료시간</p>
                        )}
                        {/* 시작 시간보다 작을 시 오류메시지 */}
                        {errors.endTime?.type === 'validate' && (
                            <p style={{ color: '#d32f2f' }}>시간을 다시 설정하세요.</p>
                        )}
                    </Stack>

                    {/* 시간표 색상 선택 */}
                    <div style={{ marginTop: '30px' }}>
                        <label htmlFor="lectureColor">시간표 색상:</label>
                        <Controller
                            control={control}
                            name="lectureColor"
                            render={({ field }) => (
                                <input
                                    {...field}
                                    style={{ marginLeft: '30px' }}
                                    id="lectureColor"
                                    type="color"
                                />
                            )}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button type="submit">입력</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default Inputmodal;
