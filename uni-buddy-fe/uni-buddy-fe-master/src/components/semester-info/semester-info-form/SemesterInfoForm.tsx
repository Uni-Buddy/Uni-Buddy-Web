import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useSemesterInfoForm from './data/useSemesterInfoForm';

const SemesterInfoForm = () => {
  const {
    avgScores,
    semesterNames,
    handleSetSemesterType,
    handleUpdateSemester,
    register,
    maxAvgScore,
    setMaxAvgScore,
    maxAvgScoreRef,
  } = useSemesterInfoForm();

  return (
    <Grid container direction={'column'} alignItems={'center'}>
      {/* 학기 선택 슬라이더 */}
      <Grid item>
        <Box width={250}>
          <Slider
            dots
            speed={500}
            afterChange={(currentPage: number) => {
              handleSetSemesterType(currentPage);
            }}
          >
            {semesterNames.map((semesterName) => (
              <Box key={semesterName.id}>
                <Typography textAlign={'center'} fontSize={'2rem'} fontWeight={700}>
                  {semesterName.text}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* 학점 입력란 */}
      <Grid container mt={8} width={'80%'} textAlign={'center'}>
        <Grid item xs={6}>
          평균 학점
        </Grid>
        <Grid item xs={6}>
          취득 학점
        </Grid>
        <Grid container>
          <Grid container width={'50%'} justifyContent={'center'}>
            {/* 본인 평균학점 */}
            <Grid item width={50}>
              <TextField
                size="small"
                variant="standard"
                {...register('avgScore')}
                inputProps={{
                  min: 0,
                  style: {
                    paddingLeft: '10px',
                  },
                }}
                onKeyDown={(key) => key.code === 'Enter' && handleUpdateSemester()}
              />
            </Grid>
            <Grid item xs="auto" mx={1}>
              /
            </Grid>
            {/* 최대 평균학점 */}
            <Grid item width={60}>
              <TextField
                select
                value={maxAvgScore}
                inputProps={{
                  ref: maxAvgScoreRef,
                }}
                onChange={(e) => {
                  setMaxAvgScore(Number(e.target.value));
                }}
                size="small"
                variant="standard"
                fullWidth
              >
                {avgScores.map((avgScore) => (
                  <MenuItem value={avgScore.value} key={avgScore.id}>
                    {avgScore.text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid container width={'50%'} justifyContent={'center'}>
            {/* 본인 취득학점 */}
            <Grid item width={50}>
              <TextField
                size="small"
                variant="standard"
                {...register('getScore')}
                inputProps={{
                  min: 0,
                  style: {
                    paddingLeft: '10px',
                  },
                }}
                onKeyDown={(key) => key.code === 'Enter' && handleUpdateSemester()}
              />
            </Grid>
            <Grid item xs="auto" mx={1}>
              /
            </Grid>
            {/* 총 취득학점 */}
            <Grid item width={40}>
              <TextField
                size="small"
                variant="standard"
                {...register('maxGetScore')}
                inputProps={{
                  min: 0,
                  style: {
                    paddingLeft: '10px',
                  },
                }}
                onKeyDown={(key) => key.code === 'Enter' && handleUpdateSemester()}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SemesterInfoForm;
