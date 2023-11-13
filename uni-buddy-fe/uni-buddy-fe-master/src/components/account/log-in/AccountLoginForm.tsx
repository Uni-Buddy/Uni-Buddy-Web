import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { useAccountLoginForm } from './data';

const AccountLoginForm = () => {
  const { register, errors, handleSubmit, handleLogin, handleGotoSignUpPage } = useAccountLoginForm();

  return (
    <Grid container justifyContent={'content'} alignItems={'center'} height={'100vh'}>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{
          width: '100%',
        }}
      >
        <Grid item xs={11} md={6} lg={5} mx={'auto'}>
          <Grid
            container
            p={4}
            sx={{
              backgroundColor: 'rgb(241, 241, 241, 0.5)',
              borderRadius: '10px',
            }}
          >
            <Grid item xs={12} textAlign={'center'}>
              <Typography variant={'h5'}>로그인</Typography>
            </Grid>

            <Grid container maxWidth={500} justifyContent={'center'} mt={7}>
              <Grid item xs={12}>
                이메일
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                  variant="outlined"
                  {...register('email')}
                  fullWidth
                  InputProps={{
                    style: {
                      borderColor: '#868686',
                      borderRadius: '50px',
                      backgroundColor: '#fff',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} mt={2}>
                비밀번호
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="password"
                  error={!!errors.pw}
                  helperText={errors.pw ? errors.pw?.message : ''}
                  variant="outlined"
                  {...register('pw')}
                  fullWidth
                  InputProps={{
                    style: {
                      borderColor: '#868686',
                      borderRadius: '50px',
                      backgroundColor: '#fff',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} mt={5}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    background: '#244F9E',
                    borderRadius: '50px',
                    ':hover': {
                      background: '#19376d',
                    },
                  }}
                >
                  로그인
                </Button>
              </Grid>

              <Grid item xs={12} mt={5} textAlign={'right'}>
                <Link onClick={() => handleGotoSignUpPage()}>회원가입</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default AccountLoginForm;
