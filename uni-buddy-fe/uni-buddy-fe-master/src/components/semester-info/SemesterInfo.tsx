import { Grid } from '@mui/material';
import { SemesterInfoForm } from './semester-info-form';
import SemesterTimeTable from './time-table/SemesterTimeTable';
import { TimeTableModal } from './time-table/time-table-modal';
import { useSemesterInfo } from './data';

const SemesterInfo = () => {
  const { isShowModal, handleModalClose } = useSemesterInfo();
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SemesterInfoForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <SemesterTimeTable />
        </Grid>
      </Grid>

      {/* 
        수정 모달 - SemesterTimeTable에 모달이 존재할 경우 css의존성에 발생하여 화면이 틀어지는 케이스 발생.
        모달 컴포넌트를 상위로 이동 후 redux를 사용 데이터 사용
      */}
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
          <TimeTableModal close={handleModalClose} />
        </Grid>
      )}
    </>
  );
};

export default SemesterInfo;
