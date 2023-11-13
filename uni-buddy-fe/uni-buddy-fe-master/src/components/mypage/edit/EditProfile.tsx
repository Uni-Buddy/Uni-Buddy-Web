import { Typography, styled, Container, Box, Button, TextField } from '@mui/material';
import { useEditProfile } from './data';
import { Input } from '@components/uis/input';

const EditProfile: React.FC = () => {
  const { handleSubmit, handleEditProfile, errors, handleGoToMypage, handleUploadImage, control } = useEditProfile();

  const Image = styled('img')`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `;
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
    <form onSubmit={handleSubmit(handleEditProfile)}>
      <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
        <Box display={'flex'} gap={6} flexGrow={1}>
          <Box display={'flex'} flexDirection={'column'} gap={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginTop: '40px',
              }}
            >
              개인 정보 수정
            </Typography>
            <Box
              sx={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
              }}
            >
              <Image src="/images/avatar-default.png" />
            </Box>
            {/* picture */}
            <input type="file" accept="image/*" onChange={handleUploadImage} />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={3}
            sx={{
              flexGrow: 1,
            }}
          >
            <Input
              name="name"
              control={control}
              label="이름"
              size="small"
              error={errors.name}
              sx={{
                width: '50%',
                height: '56px',
              }}
            />

            <Input
              name="email"
              control={control}
              label="이메일"
              size="small"
              error={errors.email}
              sx={{
                width: '50%',
                height: '56px',
              }}
            />

            <Input
              name="university"
              control={control}
              label="대학교"
              size="small"
              error={errors.university}
              sx={{
                width: '50%',
                height: '56px',
              }}
            />

            <Input
              name="phone"
              control={control}
              label="휴대폰 번호"
              size="small"
              error={errors.phone}
              sx={{
                width: '50%',
                height: '56px',
              }}
            />

            <Input
              type="date"
              name="birth"
              control={control}
              label="생년월일"
              size="small"
              error={errors.birth}
              sx={{
                width: '50%',
                height: '56px',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
              추가정보
            </Typography>
            <Box display={'flex'} gap={2} sx={{ width: '70%' }}>
              <Input
                name="additionalInfoName"
                control={control}
                label="제목"
                size="small"
                error={errors.additionalInfoName}
                sx={{
                  width: '50%',
                  height: '56px',
                }}
              />

              <Input
                name="additionalInfoValue"
                control={control}
                label="내용"
                size="small"
                error={errors.additionalInfoValue}
                sx={{
                  width: '50%',
                  height: '56px',
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          sx={{
            gap: '20px',
            marginTop: '40px',
          }}
        >
          <NavigateButton type="submit" variant="outlined">
            저장
          </NavigateButton>
          <NavigateButton type="button" variant="outlined" onClick={() => handleGoToMypage()}>
            취소
          </NavigateButton>
        </Box>
      </Container>
    </form>
  );
};

export default EditProfile;
