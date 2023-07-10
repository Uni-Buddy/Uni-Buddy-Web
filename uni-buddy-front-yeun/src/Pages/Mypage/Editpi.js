import React from 'react';
import './Editpi.css';
import Logo from './img/Logo.png';
import Nav from './Nav/Nav';
import Plus from './Plus/Plus';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    MenuItem,
    Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Editpi = () => {

    // 프로필 사진
    let [mainImg, setMainImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function (event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    // 대학 상태 선택
    const option1 = [
        {
            value: 'attending',
            label: '재학',
        },
        {
            value: 'rest',
            label: '휴학',
        },
        {
            value: 'graduate',
            label: '졸업',
        },
    ];

    // 전화번호 앞자리 선택
    const option2 = [
        {
            value: '010',
            label: '010',
        },
        {
            value: '011',
            label: '011',
        },
        {
            value: '016',
            label: '016',
        },
        {
            value: '017',
            label: '017',
        },
        {
            value: '019',
            label: '019',
        },
    ];

    // 비밀번호 보이게 안보이게
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <>
            {/* 로고 */}
            <div>
                <img
                    src={Logo}
                    alt="Logo"
                    className="Logo"
                    onClick={() => window.location.reload()}
                />
            </div>

            {/* 사이드바 */}
            <Nav />

            {/* 프로필 */}
            <section>
                {/* 이미지 미리보기 */}
                <img className="Imagepreview" alt="메인사진" src={mainImg}></img>
                {/* 이미지 업로드 */}
                <input className="Filechoose" type="file" id="image" accept="image/*"
                    style={{ border: "solid 1px lightgray", borderRadius: "5px" }}
                    onChange={setPreviewImg} />
            </section>

            {/* 내 정보 수정 */}
            <section className='Information'>
                <text style={{ fontSize: 20 }}>개인정보 수정</text>

                {/* 이름 */}
                <div>
                    <TextField
                        sx={{
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10 }}
                        id="name"
                        label="이름"
                        variant="standard" />
                </div>

                {/* 이메일(ID) */}
                <div>
                    <TextField
                        sx={{
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10 }}
                        id="ID"
                        label="이메일"
                        variant="standard" />
                </div>

                {/* 비밀번호 */}
                <div>
                    <FormControl
                        sx={{
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10 }}
                        variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">비밀번호</InputLabel>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                {/* 대학교 */}
                <div>
                    <TextField
                        sx={{
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10, marginRight: 10 }}
                        id="university"
                        label="대학교"
                        variant="standard" />


                    {/* 대학 상태 선택 */}
                    <TextField
                        sx={{
                            width: { sm: 200, md: 100 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10 }}
                        id="option1"
                        select
                        label=" "
                        defaultValue="attending"
                        variant="standard"
                    >
                        {option1.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                {/* 휴대폰 번호 */}
                <div>
                    {/* 휴대폰 번호 맨 앞자리 선택 */}
                    <TextField
                        sx={{
                            width: { sm: 200, md: 200 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10, marginTop: 20, marginRight: 10 }}
                        id="telfirst"
                        select
                        label="휴대폰번호"
                        defaultValue="010"
                        variant="standard"
                    >
                        {option2.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* 두번째 자리 입력 */}
                    <TextField
                        sx={{
                            width: { sm: 200, md: 200 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10, marginTop: 20, marginRight: 10 }}
                        id="telmiddle"
                        label=" "
                        variant="standard" />

                    {/* 세번째 자리 입력 */}
                    <TextField
                        sx={{
                            width: { sm: 200, md: 200 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }
                        }}
                        style={{ marginBottom: 10, marginTop: 20 }}
                        id="tellast"
                        label=" "
                        variant="standard" />
                </div>

                {/* 생년월일 선택 */}
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DesktopDatePicker',
                            ]}
                        >
                            <DemoItem
                                label="생년월일">
                                <DesktopDatePicker />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                {/* '추가정보'란이라는 고정된 텍스트 */}
                <TextField
                    sx={{
                        width: { sm: 200, md: 625 }
                    }}
                    style={{ marginBottom: 20, marginTop: 20 }}
                    disabled
                    id="text-plusinformation"
                    defaultValue="추가정보"
                    variant="standard"
                />

                {/* 정보 추가 */}
                <Plus />

                {/* 저장 (일단 저장 누르면 마이페이지로 이동하는 정도) */}
                <aside>
                    <Link to="/mypage" style={{ textDecoration: "none" }}>
                        <button className='Editsave'>저장</button>
                    </Link>
                    <button className='Editcancle'>취소</button>
                </aside>
            </section>
        </>



    )

}

export default Editpi;