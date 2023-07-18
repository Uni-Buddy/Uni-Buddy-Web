// 비밀번호 변경 페이지

import './Changepswd.css';
import Head from './img/Start.png';
import Icon from './img/My.png';
import Nav from './Nav';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    TextField,
    FormControl,
    FormHelperText,
    Grid,
    Box,
    Container,
} from '@mui/material';
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


const Changepswd = () => {
    // 페이지 이동
    const navigate = useNavigate();
    // useState로 에러 메시지 관리
    const [passwordCurrent, setPasswordCurrent] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [saveError, setSaveError] = useState('');

    const onhandlePost = async (data) => {
        const { password, newpassword } = data;
        const postData = { password, newpassword };

        // post
        // axios로 서버에 post요청을 보내고
        await axios
            .post('/member/join', postData)
            // 변경에 성공하면 마이페이지로 이동
            .then(function (response) {
                console.log(response, '성공');
                navigate.push('/mypage');
            })
            // 요청에 실패하면 Error 출력
            .catch(function (err) {
                console.log(err);
                setSaveError('실패하였습니다. 다시한번 확인해 주세요.');
            });
    };

    // form 전송
    const handleSubmit = (e) => {
        e.preventDefault();

        // new FormData를 사용해 TextField에서 지정해준 name으로 input값 받아옴
        const data = new FormData(e.currentTarget);
        const joinData = {
            currentpassword: data.get('currentpassword'),
            password: data.get('password'),
            rePassword: data.get('rePassword'),
        };
        const { currentpassword, password, rePassword } = joinData;


        // 현재 비밀번호 유효성 체크
        const passwordRegex1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex1.test(currentpassword))
            setPasswordCurrent('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordCurrent('');

        // 새 비밀번호 유효성 체크
        const passwordRegex2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex2.test(password))
            setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        // 새 비밀번호 같은지 체크
        if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 모두 통과하면 post되는 코드 실행
        if (
            passwordRegex2.test(password) &&
            password === rePassword
        ) {
            // 모든 유효성 검사에 통과하면 onhandlePost에 입력값을 넘겨
            onhandlePost(joinData);
        }
    };


    return (
        <>
            {/* 배경 및 아이콘 */}
            <header>
                <img src={Head} alt="Head" className="Pswd_Head" />
                <div className="Pswd_Icon">
                    <div className="Pswd_Bigcircle">
                        <img src={Icon} alt="Icon" className="Pswd_img" />
                    </div>
                    <div className="Pswd_Smallcircle"></div>
                    <p className="Pswd_Iconwrite">비밀번호 변경</p>
                </div>
            </header>


            {/*사이드바*/}
            <Nav />

            <Container className="Pswd_Container" component="main" maxWidth="xs">
                <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <FormControl component="fieldset" variant="standard">
                        <br />
                        <br />
                        <br />

                        <Grid container spacing={2}>

                            {/* 현재 비밀번호 input */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    id="currentpassword"
                                    name="currentpassword"
                                    label="현재 비밀번호"
                                    error={passwordCurrent !== '' || false}
                                    variant="standard"
                                />
                            </Grid>
                            {/* 에러 메세지 출력 : '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' */}
                            <FormHelperTexts>{passwordState}</FormHelperTexts>

                            {/* 새 비밀번호 input */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="새 비밀번호"
                                    error={passwordState !== '' || false}
                                    variant="standard"
                                />
                            </Grid>
                            {/* 에러 메세지 출력 : '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' */}
                            <FormHelperTexts>{passwordState}</FormHelperTexts>

                            {/* 새 비밀번호 확인 input */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    label="새 비밀번호 확인"
                                    error={passwordError !== '' || false}
                                    variant="standard"
                                />
                            </Grid>
                            {/* 에러 메세지 출력 : '비밀번호가 일치하지 않습니다.' */}
                            <FormHelperTexts>{passwordError}</FormHelperTexts>
                        </Grid>
                        <br />
                        <br />
                        {/* 확인 버튼, 취소 버튼 */}
                        <aside className='Pswd_Asid'>
                            <button className='Pswd_Button' type='submit'>확인</button>
                            <button className='Pswd_Button' type='submit'>취소</button>
                        </aside>
                    </FormControl>
                    {/* 요청에 실패했을 시 에러 메세지 출력 */}
                    <FormHelperTexts>{saveError}</FormHelperTexts>
                </Boxs>
            </Container>
        </>
    );
};

export default Changepswd;