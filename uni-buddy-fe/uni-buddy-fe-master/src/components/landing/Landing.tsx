import LandingHeaderline from '@components/landing/headerline/LandingHeaderline';
import { LandingIntro } from '@components/landing/intro';
import { ROUTES } from '@libs/router/data';
import { Box, Button, Grid } from '@mui/material';
import { useLanding } from './data';

const Landing = () => {
  const { navigate, isHeaderlineScreen, setIsHeaderlineScreen } = useLanding();
  return (
    <>
      {/* FIXME: TESTCODE */}
      <Box position={'fixed'} zIndex={9}>
        <Button variant="outlined" onClick={() => navigate(ROUTES.INDEX.path)}>
          공유페이지(mainPage)
        </Button>
      </Box>

      <Grid
        container
        direction={'column'}
        sx={{
          transform: isHeaderlineScreen ? 'translateY(-40%)' : 'translateY(0%)',
          transition: 'all 0.4s ease-in-out',
        }}
      >
        <LandingIntro isHeaderlineScreen={isHeaderlineScreen} setIsHeaderlineScreen={setIsHeaderlineScreen} />
        <LandingHeaderline />
      </Grid>
    </>
  );
};

export default Landing;
