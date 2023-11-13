import { Grid, TextField } from '@mui/material';
import { useAddSchedules } from './data';
import { ScheduleItem } from '.';

function AddSchedules() {
  const { schedules, currentDate, handleAddSchedules, SCHEDULE_HEIGHT, inputValue, setInputValue } = useAddSchedules();
  return (
    <Grid container>
      <Grid item xs={12} textAlign={'center'} sx={{ backgroundColor: '#203864', color: '#fff' }} mb={1}>
        일정 등록
      </Grid>
      <Grid item xs={12}>
        <Grid container gap={2} sx={{ maxHeight: `${SCHEDULE_HEIGHT * 3 + 36}px`, overflowY: 'auto' }}>
          {schedules
            .filter(
              (schedule) =>
                schedule.date.getFullYear() === currentDate.getFullYear() &&
                schedule.date.getMonth() === currentDate.getMonth() &&
                schedule.date.getDate() === currentDate.getDate(),
            )
            .map((schedule) => (
              <ScheduleItem key={schedule.id} schedule={schedule} height={SCHEDULE_HEIGHT} />
            ))}
        </Grid>
      </Grid>
      <Grid item xs={12} my={4}>
        <TextField
          label="일정명"
          variant="standard"
          fullWidth
          placeholder="입력 후 Enter"
          onKeyDown={handleAddSchedules}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Grid>
    </Grid>
  );
}

export default AddSchedules;
