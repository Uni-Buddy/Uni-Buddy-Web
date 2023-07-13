// 개인정보 수정 페이지

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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from 'react-router-dom';

const Editpi = () => {
  // 로고 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }

  // 프로필 사진
  let [mainImg, setMainImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const setPreviewImg = (event) => {
    // 이미지 미리보기를 위한 FileReader API 사용
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg(event.target.result);
    };
    // readAsDataURL : 파일을 URL로 만들어 파일 정보를 주소처럼 사용
    reader.readAsDataURL(event.target.files[0]);
  };

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

  // 비밀번호
  // type 변경 여부를 알리는 state
  const [showPassword, setShowPassword] = React.useState(false);
  // 아이콘 클릭시 비밀번호 보이게
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      {/* 로고 */}
      <div className="Header">
        <img src={Logo} alt="Logo" className="Share_Logo" onClick={goshare} />
      </div>

      {/* 사이드바 */}
      <Nav />

      {/* 프로필 */}
      <section>
        {/* 이미지 미리보기 */}
        <img className="Imagepreview" alt="메인사진" src={mainImg}></img>
        {/* 이미지 업로드 
                accept속성 : 서버로 업로드 할 수 있는 파일의 타입 명시 ('image/*'은 모든 타입의 이미지 파일이 허용)*/}
        <input
          className="Filechoose"
          type="file"
          id="image"
          accept="image/*"
          style={{ border: 'solid 1px lightgray', borderRadius: '5px' }}
          onChange={setPreviewImg}
        />
      </section>

      {/* 내 정보 수정 */}
      <section className="Information">
        <text style={{ fontSize: 20 }}>개인정보 수정</text>

        {/* 이름 input */}
        <div>
          <TextField
            sx={{
              width: { sm: 200, md: 300 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10 }}
            id="name"
            label="이름"
            variant="standard"
          />
        </div>

        {/* 이메일(ID) input */}
        <div>
          <TextField
            sx={{
              width: { sm: 200, md: 300 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10 }}
            id="ID"
            label="이메일"
            variant="standard"
          />
        </div>

        {/* 비밀번호 input */}
        <div>
          <FormControl
            sx={{
              width: { sm: 200, md: 300 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">
              비밀번호
            </InputLabel>
            <Input
              id="password"
              // state에 따라 type 변경
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  {/* 클릭하면 input의 type이 변경되도록*/}
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* 대학교 input */}
        <div>
          <TextField
            sx={{
              width: { sm: 200, md: 300 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10, marginRight: 10 }}
            id="university"
            label="대학교"
            variant="standard"
          />

          {/* 대학 상태 선택 */}
          <TextField
            sx={{
              width: { sm: 200, md: 100 },
              '& .MuiInputBase-root': {
                height: 40,
              },
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
              '& .MuiInputBase-root': {
                height: 40,
              },
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

          {/* 두번째 자리 input */}
          <TextField
            sx={{
              width: { sm: 200, md: 200 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10, marginTop: 20, marginRight: 10 }}
            id="telmiddle"
            label=" "
            variant="standard"
          />

          {/* 세번째 자리 input */}
          <TextField
            sx={{
              width: { sm: 200, md: 200 },
              '& .MuiInputBase-root': {
                height: 40,
              },
            }}
            style={{ marginBottom: 10, marginTop: 20 }}
            id="tellast"
            label=" "
            variant="standard"
          />
        </div>

        {/* 생년월일 선택 */}
        <div>
          {/* 날짜 라이브러리 어댑터 클래스 기능 */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              // DesktopDatePicker : 날짜 input에 달력이 붙어서 나오는 방식
              components={['DesktopDatePicker']}
            >
              <DemoItem label="생년월일">
                <DesktopDatePicker inputFormat={'yy-mm-dd'} mask={'__-__-__'} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        {/* '추가정보'란이라는 고정된 텍스트 */}
        <TextField
          sx={{
            width: { sm: 200, md: 625 },
          }}
          style={{ marginBottom: 20, marginTop: 20 }}
          disabled
          id="text-plusinformation"
          defaultValue="추가정보"
          variant="standard"
        />

        {/* 정보 추가 */}
        <Plus />

        {/* 저장 (일단 저장 누르면 마이페이지로 이동하는 정도), 취소 버튼 */}
        <aside className="Edit_Aside">
          <Link to="/mypage" style={{ textDecoration: 'none' }}>
            <button className="Edit_Button">저장</button>
          </Link>
          <button className="Edit_Button">취소</button>
        </aside>
      </section>
    </>
  );
};

export default Editpi;
