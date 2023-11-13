import { Grid } from '@mui/material';
import { CareerItemProps } from './data';

const CareerItem = ({ career, hover = true, index }: CareerItemProps) => {
  return (
    <Grid
      container
      sx={{
        ':hover': {
          fontWeight: hover ? 'bold' : 'auto',
        },
      }}
      wrap="nowrap"
    >
      {index && (
        <Grid item xs={'auto'} px={1}>
          {index}
        </Grid>
      )}
      <Grid item xs={6.5} px={1}>
        {career.title}
      </Grid>
      <Grid item xs={2.5} px={1}>
        {career.trem}
      </Grid>
      <Grid item xs={3} px={1}>
        {career.agencyName}
      </Grid>
    </Grid>
  );
};

export default CareerItem;
