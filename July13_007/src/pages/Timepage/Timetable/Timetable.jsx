//시간표

import './Nav.css';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React, { useCallback } from 'react';
import Timetablerow from './Timetablerow';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import Inputmodal from '../Inputmodal/Inputmodal';
import { timeTableState } from '../store/store';
import { useRecoilValue } from 'recoil';



//시간 배열
const hourData = Array.from({ length: 11 }, (i, j) => j + 9);
const styles = () => ({
    Table: {
        '& th, td': {
            border: '1px solid rgba(224,224,224,1)',
        },
    },
});

//
const Timetable = ({ classes }) => {
    const timeTableData = useRecoilValue(timeTableState);
    const [showModal, setshowModal] = useState(false);
    const [editInfo, seteditInfo] = useState({});
    const handleClose = useCallback(() => {
        setshowModal(false);
        seteditInfo({});
    }, []);

    const Edit = useCallback(
        (day, id) => {
            const { start, end, name, color, pro, room } = timeTableData[day].find(
                (lectureInfo) => lectureInfo.id === id,
            );
            seteditInfo({
                dayData: day,
                startTimeData: start,
                endTimeData: end,
                lectureNameData: name,
                professorNameData: pro,
                lectureRoonData: room,
                colorData: color,
                idNum: id,
            });
            setshowModal(true);
        },
        [timeTableData],
    );





    return (
        <>
            
            <TableContainer
                sx={{
                    width: '50%',
                    minWidth: '650px',
                    marginLeft: 'auto',
                    marginRight: '15%',
                }}
            >
                <Typography variant="h2"
                    fontWeight={10}
                    component="div"
                    align="left"
                    sx={{ fontSize: 24 }}>
                    시간표
                </Typography>

                {/*시간표*/}
                <Table className={classes.Table}>
                    {/*시간표 1행 (요일 표시)*/}
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" width={200}>

                            </TableCell>
                            <TableCell align="center" width={200}>
                                월
                            </TableCell>
                            <TableCell align="center" width={200}>
                                화
                            </TableCell>
                            <TableCell align="center" width={200}>
                                수
                            </TableCell>
                            <TableCell align="center" width={200}>
                                목
                            </TableCell>
                            <TableCell align="center" width={200}>
                                금
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* */}
                    <TableBody>
                        {hourData.map((time, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{`${time}:00-${time + 1
                                    }:00`}</TableCell>
                                <Timetablerow timeNum={time} Edit={Edit} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/*추가 버튼*/}
                <Button
                    variant="outlined"
                    sx={{ float: 'right', fontSize: 24, marginTop: '10px' }}
                    onClick={() => setshowModal(true)}
                >+</Button>
            </TableContainer>
            
            {/*입력 모달*/}
            <Inputmodal
                showModal={showModal}
                handleClose={handleClose}
                {...editInfo}
            />
        </>
    );
};

export default withStyles(styles)(Timetable);