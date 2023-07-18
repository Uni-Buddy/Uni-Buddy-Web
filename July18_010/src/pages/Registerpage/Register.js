// 회원가입 페이지

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

// 오류 메시지 스타일
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

// 입력 박스 스타일
const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

const Registerpage = () => {
    const theme = createTheme();
    // 페이지 이동
    const navigate = useNavigate();
    // useState로 에러 메시지 관리
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [universityError, setUniversityError] = useState('');
    const [registerError, setRegisterError] = useState('');

    // 동의 체크
    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    // 
    const onhandlePost = async (data) => {
        const { email, name, password, university } = data;
        const postData = { email, name, password, university };

        // axios로 서버에 post요청을 보내고
        await axios
            .post('/member/join', postData)
            //회원가입에 성공하면 로그인 페이지로 이동
            .then(function (response) {
                console.log(response, '성공');
                navigate.push('/login');
            })
            //요청에 실패하면 registerError를 출력
            .catch(function (err) {
                console.log(err);
                setRegisterError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
            });
    };

    // form 전송
    const handleSubmit = (e) => {
        e.preventDefault();

        //new FormData를 사용해 TextField에서 지정해준 name으로 input값 받아옴
        const data = new FormData(e.currentTarget);
        const joinData = {
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            rePassword: data.get('rePassword'),
            university: data.get('university'),
        };
        const { email, name, password, rePassword, university } = joinData;

        // 이메일 유효성 체크
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
        else setEmailError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        // 비밀번호 같은지 체크
        if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 이름 유효성 검사
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(name) || name.length < 2) setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        // 대학교 유효성 검사
        const universityRegex = /^[가-힣a-zA-Z]+$/;
        if (!universityRegex.test(university) || university.length < 4) setUniversityError('올바른 대학명을 입력해주세요.');
        else setUniversityError('');

        // 회원가입 동의 체크
        if (!checked) alert('회원가입 약관에 동의해주세요.');

        // 모두 통과하면 post되는 코드 실행
        if (
            emailRegex.test(email) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            nameRegex.test(name) &&
            universityRegex.test(university) &&
            checked
        ) {
            // 모든 유효성 검사에 통과하면 onhandlePost에 입력값을 넘겨
            onhandlePost(joinData);
        }
    };

    return (
        <ThemeProvider theme={theme}>
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
                        회원가입
                    </Typography>
                    <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <FormControl component="fieldset" variant="standard">
                            {/* Grid도 약간 div랑 비슷 */}
                            <Grid container spacing={2}>

                                {/* 이메일 input */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        autoFocus
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="이메일 주소"
                                        error={emailError !== '' || false}
                                    />
                                </Grid>
                                {/* 에러 메시지 출력 : '올바른 이메일 형식이 아닙니다.'*/}
                                <FormHelperTexts>{emailError}</FormHelperTexts>

                                {/* 비밀번호 input */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                        error={passwordState !== '' || false}
                                    />
                                </Grid>
                                {/* 에러 메시지 출력 : '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' */}
                                <FormHelperTexts>{passwordState}</FormHelperTexts>

                                {/* 비밀번호 재입력 input */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="rePassword"
                                        name="rePassword"
                                        label="비밀번호 재입력"
                                        error={passwordError !== '' || false}
                                    />
                                </Grid>
                                {/* 에러 메시지 출력 : '비밀번호가 일치하지 않습니다.' */}
                                <FormHelperTexts>{passwordError}</FormHelperTexts>

                                {/* 이름 input */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="이름"
                                        error={nameError !== '' || false}
                                    />
                                </Grid>
                                {/* 에러 메시지 출력 : '올바른 이름을 입력해주세요.' */}
                                <FormHelperTexts>{nameError}</FormHelperTexts>

                                {/* 대학교 input */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="university"
                                        name="university"
                                        label="대학교"
                                        error={universityError !== '' || false}
                                    />
                                </Grid>
                                {/* 에러 메시지 출력 : '올바른 대학명을 입력해주세요.'*/}
                                <FormHelperTexts>{universityError}</FormHelperTexts>

                                {/* 체크 박스 */}
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleAgree} color="primary" />}
                                        label="회원가입 약관에 동의합니다."
                                    />
                                </Grid>
                            </Grid>

                            {/* 회원가입 버튼 */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                size="large"
                            >
                                회원가입
                            </Button>
                        </FormControl>
                        {/* 입력 조건(or체크)에 다 만족하지 못할 시 에러 메시지 출력 */}
                        <FormHelperTexts>{registerError}</FormHelperTexts>
                    </Boxs>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Registerpage;

// Link 는 특정 주소로 이동해주는 태그였다면
// Navigate 는 특정 행동을 했을 때 해당 주소로 이동해줄 수 있게