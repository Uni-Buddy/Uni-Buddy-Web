import { Grid, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { LandingIntroProps } from './data/landingIntro.tpyes';
import { useLandingIntro } from './data';

const LandingIntro = ({ isHeaderlineScreen, setIsHeaderlineScreen }: LandingIntroProps) => {
  const { handleToggleUpDownScreen } = useLandingIntro(setIsHeaderlineScreen);

  return (
    <Grid container direction={'column'} height={'100vh'} justifyContent={'space-between'} textAlign={'center'}>
      <Grid item mt={'25%'}>
        <img src="/images/intro.png" />
      </Grid>
      <Grid item mb={10}>
        <IconButton
          onClick={() => handleToggleUpDownScreen()}
          sx={{
            '&:hover': {
              color: 'aliceblue',
              background: '#244F9E',
              border: '1px solid #244F9E',
            },
          }}
        >
          {isHeaderlineScreen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default LandingIntro;
