import { useAppDispatch, useAppSelector } from '@libs/stores';
import { semesterSlice } from '@libs/stores/semester';

const dates = ['월', '화', '수', '목', '금'];
const times = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
import { useForm } from 'react-hook-form';
import { SemesterTime, SemesterTimeAdd, semesterTimeAddSchema, semesterTimeSchema } from '../../data';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const useTimeTableModal = (close: () => void) => {
  const { selectedSemesterTime, semesterTimes } = useAppSelector((state) => state.semester);
  const isEditMode = selectedSemesterTime.subNum !== 0;

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: isEditMode
      ? selectedSemesterTime
      : {
          date: '월',
          color: '#FFFFFF',
        },
    resolver: yupResolver(isEditMode ? semesterTimeSchema : semesterTimeAddSchema),
  });

  const overlapTimeCheck = (semesterTimeData: SemesterTimeAdd | SemesterTime) => {
    let filterSemesterTimes = semesterTimes;
    if (isEditMode) {
      //1. 자신 제외
      filterSemesterTimes = semesterTimes.filter((semesterTime) => selectedSemesterTime.subNum !== semesterTime.subNum);
    }

    filterSemesterTimes = filterSemesterTimes
      //2. 같은 요일만
      .filter((semesterTime) => semesterTime.date === semesterTimeData.date);

    // 3. 새로운 강의의 종료시간이 등록된 강의의 시작시간보다 늦는 경우
    const isDisable1 = filterSemesterTimes.some(
      (semesterTime) =>
        semesterTimeData.startTime <= semesterTime.startTime && semesterTimeData.endTime > semesterTime.startTime,
    );

    // 4. 새로운 강의의 시작시간이 등록된 강의의 시작시간보다 빠르고 새로운 강의의 종료시간이 등록된 강의의 종료시간보다 빠른경우 경우
    const isDisable2 = filterSemesterTimes.some(
      (semesterTime) =>
        semesterTimeData.startTime <= semesterTime.startTime && semesterTimeData.endTime >= semesterTime.endTime,
    );

    // 5. 새로운 강의의 시작시간이 등록된 강의의 종료시간보다 빠르거나 같은 경우
    const isDisable3 = filterSemesterTimes.some((semesterTime) => semesterTimeData.startTime > semesterTime.endTime);

    if (isDisable1 || isDisable2 || isDisable3) {
      console.error(isDisable1, isDisable2, isDisable3);

      return true;
    }
    return false;
  };

  const handleInsertSemesterTime = (semesterTimeData: SemesterTimeAdd | SemesterTime) => {
    const isOverlapTime = overlapTimeCheck(semesterTimeData);
    // FIXME: isEditMode여부에 따른 post, put구현필요
    if (isOverlapTime) {
      toast.error('기존 등록된 시간표와 겹칩니다.');
      return;
    }
    console.log(semesterTimeData);
  };

  // 선택된 강의시간의 subNum:0인 경우는 미선택으로 판단한다.
  const handleClose = () => {
    dispatch(semesterSlice.actions.setSelectedSemesterTime({ ...selectedSemesterTime, subNum: 0 }));
    close();
  };
  return {
    selectedSemesterTime,
    register,
    isEditMode,
    handleSubmit,
    handleInsertSemesterTime,
    errors,
    control,
    dates,
    times,
    handleClose,
  };
};

export default useTimeTableModal;
