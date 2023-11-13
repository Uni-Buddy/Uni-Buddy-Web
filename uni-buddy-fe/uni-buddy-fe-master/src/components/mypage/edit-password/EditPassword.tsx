import { Button, Checkbox, FormControlLabel, Grid, styled } from '@mui/material';
import { Input } from '@components/uis/input';
import { useEditPassword } from './data';

const EditPassword: React.FC = () => {
  const { control, handleSubmit, errors, onSubmit, showPassword, setShowPassword, handleGoToMypage } =
    useEditPassword();

  const NavigateButton = styled(Button)(() => ({
    minWidth: '120px',
    color: '#000',
    borderColor: '#000',

    ':hover': {
      borderColor: '#333',
      backgroundColor: '#244F9E',
      color: '#fff',
    },
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6} px={12}>
          <Grid item xs={12} sm={12} mb={2}>
            <Input
              name="currentPw"
              control={control}
              label="현재 비밀번호 *"
              size="small"
              error={errors.currentPw}
              sx={{
                width: '100%',
                height: '56px',
              }}
              type={showPassword ? 'text' : 'password'}
            />
          </Grid>
          <Grid item xs={12} sm={12} mb={2}>
            <Input
              name="pw"
              control={control}
              label="새 비밀번호 *"
              size="small"
              error={errors.pw}
              sx={{
                width: '100%',
                height: '56px',
              }}
              type={showPassword ? 'text' : 'password'}
            />
          </Grid>
          <Grid item xs={12} sm={12} mb={2}>
            <Input
              name="pwConfirmation"
              control={control}
              label="비밀번호 확인 *"
              size="small"
              error={errors.pwConfirmation}
              sx={{
                width: '100%',
                height: '56px',
              }}
              type={showPassword ? 'text' : 'password'}
            />
          </Grid>
          {/* <Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} color="default" /> */}
          <FormControlLabel
            control={
              <Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} color="default" />
            }
            label="비밀번호 보기"
          />

          <Grid container justifyContent="space-between" mt={2}>
            <NavigateButton type="submit" variant="outlined">
              변경
            </NavigateButton>
            <NavigateButton type="button" variant="outlined" onClick={() => handleGoToMypage()}>
              취소
            </NavigateButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditPassword;
