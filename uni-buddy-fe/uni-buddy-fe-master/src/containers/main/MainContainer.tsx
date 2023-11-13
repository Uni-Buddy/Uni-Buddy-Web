import { MainCareerList } from '@components/main/career-list';
import { MainUserProfile } from '@components/main/user-profile';
import { Grid } from '@mui/material';

const MainContainer = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <MainUserProfile />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <MainCareerList />
      </Grid>
    </Grid>
  );
};

export default MainContainer;
