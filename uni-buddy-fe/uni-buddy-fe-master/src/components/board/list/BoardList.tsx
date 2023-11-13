import { Grid, IconButton } from '@mui/material';
import { BoardLatestPost } from './latest-post';
import { BoardCareerList } from './career-list';
import AddIcon from '@mui/icons-material/Add';
import { useBoardList } from './data';

const BoardList = () => {
  const { handleGotoBoardWrite } = useBoardList();
  return (
    <Grid container direction={'column'}>
      <Grid item>
        <BoardLatestPost />
      </Grid>

      <Grid item textAlign={'right'} mt={7}>
        <IconButton disableRipple onClick={() => handleGotoBoardWrite()}>
          <AddIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item>
        <BoardCareerList />
      </Grid>
    </Grid>
  );
};

export default BoardList;
