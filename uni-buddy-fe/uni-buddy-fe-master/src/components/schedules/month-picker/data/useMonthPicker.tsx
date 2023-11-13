import { add } from 'date-fns';
import { Settings } from 'react-slick';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useMemo } from 'preact/hooks';

const useMonthPicker = () => {
  const { currentDate } = useAppSelector((state) => state.schedules);
  const dispatch = useAppDispatch();

  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleAfter = (currentSlide: number) => {
    if (currentSlide === 0 && currentDate.getMonth() === 11) {
      // add month and set day to 1
      const nextDate = add(currentDate, { months: 1 });
      nextDate.setDate(1);
      dispatch({
        type: 'schedules/setCurrentDate',
        payload: nextDate,
      });
    } else if (currentSlide === 11 && currentDate.getMonth() === 0) {
      // minus month and set day to 1
      const nextDate = add(currentDate, { months: -1 });
      nextDate.setDate(1);
      dispatch({
        type: 'schedules/setCurrentDate',
        payload: nextDate,
      });
    } else {
      const nextDate = add(currentDate, { months: currentSlide - currentDate.getMonth() });
      // set day to 1
      nextDate.setDate(1);
      dispatch({
        type: 'schedules/setCurrentDate',
        payload: nextDate,
      });
    }
  };

  const sliderSettings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentDate.getMonth(),
    afterChange: handleAfter,
  };

  return {
    months,
    currentDate,
    sliderSettings,
  };
};

export default useMonthPicker;
