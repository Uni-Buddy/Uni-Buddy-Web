import { Button } from '@mui/material';

const AccountSignUpButton = () => {
  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        background: '#244F9E',
        borderRadius: '50px',
        ':hover': {
          background: '#19376d',
        },
      }}
    >
      회원가입
    </Button>
  );
};

export default AccountSignUpButton;
