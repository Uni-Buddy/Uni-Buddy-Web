import { Grid, Typography } from '@mui/material';
import { BoardLatestPostItem } from './latest-post-item';
import { useBoardListLatestPost } from './data';

const BoardLatestPost = () => {
  const { latestPosts } = useBoardListLatestPost();
  return (
    <Grid
      sx={{
        background: 'rgb(241, 241, 241, 0.5)',
      }}
      container
      direction={'column'}
      p={2}
    >
      <Grid item>
        <Typography color={'primary'}>최신글</Typography>
      </Grid>

      <Grid item>
        {latestPosts.map((latestPost) => (
          <BoardLatestPostItem career={latestPost} key={latestPost.actId} />
        ))}
      </Grid>
    </Grid>
  );
};

export default BoardLatestPost;
