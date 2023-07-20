// 로그인 페이지

import * as React from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Login.css';


// mui에서 제공하는 테마
const defaultTheme = createTheme();

export default function Loginpage() {
  // form 전송
  const handleSubmit = (event) => {
    event.preventDefault();

    // new FormData를 사용해 TextField에서 지정해준 name으로 input값 받아옴
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    // 기본 테마 적용
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        {/* Box 컴포넌트 : css 유틸을 필요로 하는 wrapper 컴포넌트 역할*/}
        {/* div랑 비슷한 개념 */}
        <Box
          sx={{
            marginTop: 23,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* 이메일 input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* 비밀번호 input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="비밀번호"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            {/* 로그인 버튼 */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Login
            </Button>
            {/* 회원가입으로 페이지 이동 */}
            <div className='GotoRegister'>
              <Link to="/register" >회원가입</Link>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}