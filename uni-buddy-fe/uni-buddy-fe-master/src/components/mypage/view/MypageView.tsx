import { useState } from 'react';
import { Button, Grid, Typography, styled } from '@mui/material';
import { ResMyPageView, useMyPageView } from './data';

function MypageView() {
  // 개인정보 수정 페이지로 이동, 비밀번호 변경 페이지로 이동 핸들러
  const { handleGotoEditProfile, handleGotoEditPassword } = useMyPageView();

  // FIXME: 임시 데이터, 추후 API 연동
  const [userInfo, setUserInfo] = useState<ResMyPageView>({
    name: '홍길동',
    email: 'kdhong@google.com',
    phone: '010-1234-5678',
    birth: '1990-01-01',
    belong: '테스트',
    profileImage: 'https://picsum.photos/200/300',
  });

  const NavigateButton = styled(Button)(() => ({
    color: '#000',
    borderColor: '#000',

    ':hover': {
      borderColor: '#333',
      backgroundColor: '#e3e3e3',
    },
  }));

  return (
    <>
      <Grid
        container
        direction={'column'}
        sx={{
          width: '92%',
          height: '100%',
          padding: '3rem',
          margin: '1rem',
          border: '2px solid #e3e3e3',
        }}
      >
        <Grid
          container
          direction={'row'}
          alignItems={'center'}
          sx={{
            height: '100%',
            paddingRight: '3rem',
          }}
        >
          {/* 프로필 이미지 */}
          <Grid
            className="profile-image"
            sx={{
              width: '192px',
              height: '192px',
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundImage: 'url(/images/user_profile_placeholder.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              alignSelf: 'flex-start',
            }}
          >
            {userInfo.profileImage && (
              <img
                src={userInfo.profileImage}
                alt="profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </Grid>
          <Grid direction={'column'} sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                fontSize: '4rem',
                fontWeight: 'bold',
                textAlign: 'right',
                borderBottom: '2px solid #8e8e8e',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              {userInfo.name}
            </Typography>
            {/* 정보 */}
            <Grid
              sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <Grid container xs={12}>
                <Grid xs={2}>소속</Grid>
                <Grid>{userInfo.belong}</Grid>
              </Grid>
              <Grid container>
                <Grid xs={2}>이메일</Grid>
                <Grid>{userInfo.email}</Grid>
              </Grid>
              <Grid container>
                <Grid xs={2}>휴대전화</Grid>
                <Grid>{userInfo.phone}</Grid>
              </Grid>
              <Grid container>
                <Grid xs={2} item>생년월일</Grid>
                <Grid>{userInfo.birth}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: 'flex',
          width: '100%',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <NavigateButton variant={'outlined'} onClick={() => handleGotoEditProfile()}>
          <Typography>개인정보 수정</Typography>
        </NavigateButton>
        <NavigateButton variant={'outlined'} onClick={() => handleGotoEditPassword()}>
          <Typography>비밀번호 변경</Typography>
        </NavigateButton>
      </Grid>
    </>
  );
}

export default MypageView;
