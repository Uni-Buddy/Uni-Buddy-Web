import { Grid, Box, Typography } from '@mui/material';
import { useMainUserInfo } from './data';

const MainUserProfile = () => {
  const { userInfo } = useMainUserInfo();
  return (
    <Grid container direction={'column'} justifyContent={'center'} rowGap={0.5}>
      {/* avatar */}
      <Grid item mb={2}>
        <Box width={'80%'} textAlign={'center'} mx={'auto'}>
          <img
            src={userInfo.avatarUrl || '/images/avatar-default.png'}
            style={{ width: 'inherit', borderRadius: '50%' }}
          />
        </Box>
      </Grid>

      <Grid item ml={5}>
        <Typography variant="body2">{userInfo.name}</Typography>
      </Grid>

      <Grid item ml={5}>
        <Typography variant="body2">{userInfo.birthDate}</Typography>
      </Grid>

      <Grid item ml={5}>
        <Typography variant="body2">{userInfo.email}</Typography>
      </Grid>

      <Grid item ml={5}>
        <Typography variant="body2"> {userInfo.introduction}</Typography>
      </Grid>
    </Grid>
  );
};

export default MainUserProfile;
