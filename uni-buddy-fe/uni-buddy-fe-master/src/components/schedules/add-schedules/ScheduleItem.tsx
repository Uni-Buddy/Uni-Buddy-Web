import { Grid } from '@mui/material';

const ScheduleItem = ({ schedule, height }: { schedule: { id: number; title: string }; height: number }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        border: '1px solid #244F9E',
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
      }}
    >
      {schedule.title}
    </Grid>
  );
};

export default ScheduleItem;
