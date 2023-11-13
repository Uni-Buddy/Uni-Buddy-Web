import { Scheduler } from '@aldabil/react-scheduler';
import { ko } from 'date-fns/locale';
import { TimeTableEvent, useSemesterTimeTable } from './data';
import { IconButton, Box, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TimeTableModal } from './time-table-modal';

import { TimeTableCell } from './time-table-cell';

const SemesterTimeTable = () => {
  const { events, isShowModal, setIsShoModal } = useSemesterTimeTable();

  return (
    <div className="table-wrapper">
      <Scheduler
        view="week"
        height={200}
        navigation={false}
        disableViewNavigator
        draggable={false}
        locale={ko}
        editable={false}
        week={{
          endHour: 20,
          startHour: 9,
          weekStartOn: 6,
          weekDays: [2, 3, 4, 5, 6],
          disableGoToDay: false,
          step: 60,
        }}
        selectedDate={new Date('2024/1/1 00:00')}
        events={events}
        // 시간표 입려된 셀 랜더링
        eventRenderer={({ event }) => {
          return <TimeTableCell event={event as TimeTableEvent} />;
        }}
      />
      <Box textAlign={'right'} mt={1}>
        <IconButton
          size="small"
          sx={{
            border: '1px solid black',
          }}
          onClick={() => setIsShoModal(true)}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* 입력 모달 */}
      {isShowModal && (
        <Grid
          container
          height={'100vh'}
          position={'fixed'}
          width={'100vw'}
          justifyContent={'center'}
          alignItems={'center'}
          top={0}
          left={0}
          sx={{
            background: 'rgba(0, 0, 0, 0.57)',
            zIndex: 9,
          }}
        >
          <TimeTableModal close={() => setIsShoModal(false)} />
        </Grid>
      )}
    </div>
  );
};

export default SemesterTimeTable;
