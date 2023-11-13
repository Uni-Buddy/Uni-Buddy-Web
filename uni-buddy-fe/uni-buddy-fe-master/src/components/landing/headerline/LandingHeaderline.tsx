import styled from '@emotion/styled';
import { Button, Grid, Typography } from '@mui/material';
import { useLandingHeaderline } from './data';
import { ROUTES } from '@libs/router/data';

const LandingButton = styled(Button)({
  borderRadius: '50px',
  '&:hover': {
    color: 'aliceblue',
    background: '#244F9E',
    border: '1px solid #244F9E',
  },
});

const LandingHeaderline = () => {
  const { navigate } = useLandingHeaderline();
  return (
    <Grid container direction={'column'} height={'100vh'}>
      <Grid container justifyContent={'center'} alignItems={'center'} mt={'10%'}>
        <Grid item>
          <Typography fontSize={'1.5rem'} fontWeight={1000} lineHeight={2} textAlign={'center'}>
            대학 생활의 완벽한 동반자, 유니버디!
            <br />
            유니버디와 함께 대학 생활을 효율적으로 관리하고
            <br />
            포트폴리오로 만들어 보세요!
          </Typography>
        </Grid>
        <Grid container justifyContent={'center'} alignItems={'center'} columnSpacing={6} mt={10}>
          <Grid item width={170}>
            <LandingButton
              variant="outlined"
              onClick={() => navigate(ROUTES.ACCOUNT.LOG_IN.path)}
              fullWidth
              color="inherit"
            >
              로그인
            </LandingButton>
          </Grid>

          <Grid item width={170}>
            <LandingButton
              variant="outlined"
              onClick={() => navigate(ROUTES.ACCOUNT.SIGN_UP.path)}
              fullWidth
              color="inherit"
            >
              회원가입
            </LandingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingHeaderline;
