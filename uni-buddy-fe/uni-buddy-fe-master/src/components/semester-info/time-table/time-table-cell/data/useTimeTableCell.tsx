import { useAppDispatch, useAppSelector } from '@libs/stores';
import { semesterSlice } from '@libs/stores/semester';
import React, { useState } from 'react';
import { TimeTableEvent } from '../../data';

const useTimeTableCell = (event: TimeTableEvent) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useAppDispatch();
  const semesterTimes = useAppSelector((state) => state.semester.semesterTimes);
  const selectedSemesterTime = semesterTimes.find((semesterTime) => semesterTime.subNum === event.event_id);

  // 모달에서 누를 버튼 종류에 따른 이벤트 처리
  const handleBtnClick = (e: React.MouseEvent, type: 'delete' | 'edit') => {
    e.preventDefault();
    e.stopPropagation();

    if (type === 'edit') {
      if (!selectedSemesterTime) return;
      dispatch(semesterSlice.actions.setSelectedSemesterTime(selectedSemesterTime));
      dispatch(semesterSlice.actions.setIsShoModal(true));
    } else {
      const isDelete = confirm(`${event.title}를(을) 시간표에서 삭제 하시겠습니까?`);
      // FIXME:삭제 로직 추가 필요
      if (!isDelete) return;
    }
  };
  return {
    isHover,
    setIsHover,
    handleBtnClick,
  };
};

export default useTimeTableCell;
