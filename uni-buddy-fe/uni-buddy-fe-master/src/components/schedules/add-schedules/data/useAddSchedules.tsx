import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useState } from 'react';

const useAddSchedules = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const schedules = useAppSelector((state) => state.schedules.schedules);
  const currentDate = useAppSelector((state) => state.schedules.currentDate);

  const handleAddSchedules = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'schedules/addSchedule',
        payload: {
          id: schedules.length + 1,
          title: inputValue,
          date: currentDate,
        },
      });
      setInputValue('');
    }
  };

  const SCHEDULE_HEIGHT = 100;

  return { schedules, currentDate, handleAddSchedules, SCHEDULE_HEIGHT, inputValue, setInputValue };
};

export default useAddSchedules;
