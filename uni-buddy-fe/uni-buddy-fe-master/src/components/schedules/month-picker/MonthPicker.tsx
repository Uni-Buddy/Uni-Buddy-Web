import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { useMonthPicker } from './data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

function MonthPicker() {
  const { months, currentDate, sliderSettings } = useMonthPicker();

  return (
    <Box width={200} marginLeft={4}>
      <Typography textAlign={'center'}>{currentDate.getFullYear()}</Typography>
      <Slider {...sliderSettings}>
        {months.map((month) => (
          <Box key={month}>
            <Typography variant="h3" fontWeight={'bolder'} textAlign={'center'}>
              {month + 1}월
            </Typography>
          </Box>
        ))}
      </Slider>
      <Typography variant="h6" textAlign={'center'} fontSize={28}>
        {format(currentDate, 'd일 EEEE', { locale: ko })}
      </Typography>
    </Box>
  );
}

export default MonthPicker;
