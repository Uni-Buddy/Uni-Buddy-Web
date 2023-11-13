import { Grid, Typography, Box } from '@mui/material';
import { useMainCareerList } from './data';
import { CareerItem } from '@components/uis/organisms/career-item';

const MainCareerList = () => {
  const { careerNames, careers } = useMainCareerList();
  return (
    <Grid
      container
      direction={'column'}
      rowGap={4}
      alignItems={'flex-start'}
      sx={{
        background: 'rgb(241, 241, 241, 0.5)',
      }}
      py={4}
      px={6}
    >
      {/* 각 경력 분류 별 반복 */}
      {careerNames.map((careerName) => (
        <Grid item key={careerName.id} width={'100%'}>
          <Box width={'100%'}>
            <Typography fontSize={'1.15rem'} fontWeight={900}>
              {careerName.text}
            </Typography>
            <Grid container direction={'column'} pl={4} mt={1}>
              {/* 각 경력분류별 경력 리스트 출력 */}
              {careers[careerName.text].map((career) => (
                <CareerItem career={career} key={career.actId} />
              ))}
            </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCareerList;
