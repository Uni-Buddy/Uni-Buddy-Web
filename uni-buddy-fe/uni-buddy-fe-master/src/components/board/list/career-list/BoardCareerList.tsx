import { Grid, Typography } from '@mui/material';
import { useBoardCareerList } from './data';
import { CareerItem } from '@components/uis/organisms/career-item';

const BoardCareerList = () => {
  const { careerTypeNames, selectedCareerTypeName, setSelectedCareerTypeName, careers } = useBoardCareerList();

  return (
    <Grid container direction={'column'}>
      {/* header career type tab*/}
      <Grid container borderTop={'1px solid #868686'} borderBottom={'1px solid #868686'} py={0.5}>
        {careerTypeNames.map((careerTypeName) => (
          <Grid
            item
            xs={12 / 5}
            key={careerTypeName.id}
            textAlign={'center'}
            onClick={() => {
              setSelectedCareerTypeName(careerTypeName.text);
              console.log(careerTypeName.text, selectedCareerTypeName);
            }}
          >
            <Typography
              sx={{
                fontWeight: selectedCareerTypeName === careerTypeName.text ? 900 : 0,
                ':hover': {
                  cursor: 'pointer',
                },
              }}
            >
              {careerTypeName.text}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* careers List */}
      <Grid item pl={4}>
        {/* FIXME: 탭 분류에 대한 파라미터 요청하여 받게 처리 필요.. */}
        {(careers[selectedCareerTypeName] || []).map((career, index) => (
          <CareerItem index={index + 1} career={career} key={career.actId} hover={false} />
        ))}
      </Grid>
    </Grid>
  );
};

export default BoardCareerList;
