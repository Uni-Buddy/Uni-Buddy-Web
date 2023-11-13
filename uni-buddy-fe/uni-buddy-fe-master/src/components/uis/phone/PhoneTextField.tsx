import { TextField } from '@mui/material';
import { forwardRef } from 'react';

const PhoneTextField = forwardRef<HTMLInputElement>((props, ref) => {
  // 3개의 TextField로 나눠서 입력받기

  return (
    <TextField
      label="휴대폰 번호"
      size="small"
      type="text"
      variant="standard"
      inputRef={ref}
      {...props}
      sx={{
        width: '50%',
      }}
    />
  );
});

export default PhoneTextField;
