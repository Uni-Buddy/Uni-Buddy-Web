import { Box, Grid, TextField } from '@mui/material';
import { MonthPicker } from './month-picker';
import { AddSchedules } from './add-schedules';
import { useSchedules } from './data';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './style.css';

function Schedules() {
  const { schedules, calendarRef, currentDate, handleDateClick, handleMonthlyGoal, goal1, goal2 } = useSchedules();

  return (
    <Grid container gap={3}>
      <Grid item xs={12} md={3}>
        <MonthPicker />
        <AddSchedules />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            color: '#fff',
            backgroundColor: '#203864',
            textAlign: 'center',
            marginBottom: 2,
          }}
        >
          전체 일정
        </Box>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate={currentDate}
          headerToolbar={{
            left: '',
            center: '',
            right: '',
          }}
          navLinks={true}
          navLinkDayClick={(e) => {
            handleDateClick(e);
          }}
          events={schedules}
          eventColor="#A6A6A6"
          height={'auto'}
          eventDisplay="block"
          eventContent={(eventInfo) => {
            return (
              <div className="event-content">
                <div className="event-title">{eventInfo.event.title}</div>
              </div>
            );
          }}
          dayMaxEvents={3}
          moreLinkText={(n) => `...`}
        />
        <Box
          sx={{
            color: '#fff',
            backgroundColor: '#203864',
            textAlign: 'center',
            marginBottom: 2,
          }}
        >
          월간 목표
        </Box>
        <Box
          sx={{
            border: '1px solid #203864',
            borderRadius: '10px',
            px: 1,
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <TextField
            fullWidth
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleMonthlyGoal('goal1', e.target.value);
              }
            }}
            defaultValue={''}
            variant="standard"
          />
          <TextField
            fullWidth
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleMonthlyGoal('goal2', e.target.value);
              }
            }}
            defaultValue={''}
            variant="standard"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Schedules;
