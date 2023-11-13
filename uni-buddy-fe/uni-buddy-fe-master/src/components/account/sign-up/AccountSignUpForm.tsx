import { Grid, Typography, TextField, FormControlLabel, Checkbox, Box, Link, Modal } from '@mui/material';
import { useAccountSignUpForm } from './data';
import { AccountSignUpButton } from './buttons';
import { Controller } from 'react-hook-form';

const AccountSignUpForm = () => {
  const { handleSignUp, register, handleSubmit, errors, control, isShowModal, setIsShowModal, setValue } =
    useAccountSignUpForm();

  return (
    <>
      <Grid container justifyContent={'content'} alignItems={'center'} height={'100vh'}>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          style={{
            width: '100%',
          }}
        >
          <Grid item xs={11} md={6} lg={5} mx={'auto'}>
            <Grid
              container
              direction="column"
              alignItems={'center'}
              p={4}
              sx={{
                backgroundColor: 'rgb(241, 241, 241, 0.5)',
                borderRadius: '10px',
              }}
            >
              <Grid item textAlign={'center'}>
                <Typography variant={'h5'}>{'회원가입'}</Typography>
              </Grid>

              <Grid container justifyContent={'center'} mt={5}>
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

                <Grid item xs={12} mt={2}>
                  비밀번호 재입력
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    type="password"
                    error={!!errors.pwConfirmation}
                    helperText={errors.pwConfirmation ? errors.pwConfirmation?.message : ''}
                    variant="outlined"
                    {...register('pwConfirmation')}
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
                  이름
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    type="text"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name?.message : ''}
                    variant="outlined"
                    {...register('name')}
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
                  대학교
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    type="text"
                    error={!!errors.university}
                    helperText={errors.university ? errors.university?.message : ''}
                    variant="outlined"
                    {...register('university')}
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
                  약관
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    name={'terms'}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel label="" control={<Checkbox checked={value} onChange={onChange} />} />
                    )}
                  />
                  <Link
                    underline="none"
                    onClick={() => {
                      setIsShowModal(true);
                      setValue('terms', true);
                    }}
                  >
                    약관보기
                  </Link>
                  {errors.terms && (
                    <Box
                      component={'p'}
                      sx={{
                        color: '#d32f2f',
                        fontSize: '0.75rem',
                        lineHeight: 1.5,
                        letterSpacing: '0.00938em',
                        marginTtop: '4px',
                        marginRight: '14px',
                        marginBottom: 0,
                        marginLeft: '14px',
                      }}
                    >
                      {errors.terms.message}
                    </Box>
                  )}
                </Grid>
              </Grid>

              <Grid item xs={12} mt={5} width={'100%'}>
                <AccountSignUpButton />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Modal
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            이용 약관
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            이 약관은 UNI-BUDDY(이하 "유니버디"라 합니다)가 제공하는 사업관련 서비스(이하 서비스)의 이용조건 및 절차,
            기타 필요한 사항을 규정함을 목적으로 합니다.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AccountSignUpForm;
