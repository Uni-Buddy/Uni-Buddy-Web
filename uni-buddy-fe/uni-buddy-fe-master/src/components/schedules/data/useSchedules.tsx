import { CalendarApi } from '@fullcalendar/core/index.js';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { format } from 'date-fns';
import { useEffect, useMemo, useRef } from 'react';

const useSchedules = () => {
  const schedules = useAppSelector((state) => state.schedules.schedules);
  const currentDate = useAppSelector((state) => state.schedules.currentDate);
  const calendarRef = useRef(null);
  const api: CalendarApi = calendarRef.current?.getApi();

  useEffect(() => {
    // set calendarRef
    api?.gotoDate(currentDate);
  }, [currentDate]);

  const dispatch = useAppDispatch();

  const handleDateClick = (e) => {
    console.log('handleDateClick:', format(new Date(e), 'yyyy-MM-dd'));
    dispatch({
      type: 'schedules/setCurrentDate',
      payload: new Date(e),
    });
  };
  const handleMonthlyGoal = (target, value) => {
    if (target === 'goal1') {
      console.log('goal1 설정:', value);
    }
    if (target === 'goal2') {
      console.log('goal2 설정:', value);
    }
  };

  const goal1 = useMemo(() => {
    return 'asdf';
  }, [currentDate]);

  const goal2 = useMemo(() => {
    return 'asdf';
  }, [currentDate]);

  return { schedules, calendarRef, currentDate, handleDateClick, handleMonthlyGoal, goal1, goal2 };
};

export default useSchedules;
