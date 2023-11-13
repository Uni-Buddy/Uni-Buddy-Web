import { Grid } from '@mui/material';

import { LatestPostItemProps } from './data';

const BoardLatestPostItem = ({ career }: LatestPostItemProps) => {
  return (
    <Grid
      py={2}
      mx={10}
      sx={{
        borderBottom: '1px solid #868686',
        ':hover': {
          fontWeight: 900,
        },
      }}
    >
      <p style={{ fontSize: '1.2rem' }}>{career.title}</p>
      <p style={{ fontSize: '0.9rem' }}>{career.content}</p>
    </Grid>
  );
};

export default BoardLatestPostItem;
