import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { useBoardWrite } from './data';
import styled from '@emotion/styled';

const BoardButton = styled(Button)({
  '&:hover': {
    color: 'aliceblue',
    background: '#244F9E',
    border: '1px solid #244F9E',
  },
});

const BoardWrite = () => {
  const { careerNames, register, handleSubmit, handleCareerWrite } = useBoardWrite();

  return (
    <form onSubmit={handleSubmit(handleCareerWrite)}>
      <Grid container direction={'column'} gap={4}>
        <Grid container alignItems={'flex-end'}>
          {/* title */}
          <Grid item flexGrow={1}>
            <TextField
              variant="standard"
              {...register('title')}
              placeholder="제목"
              sx={{
                width: '95%',
              }}
            />
          </Grid>

          {/* 경력 카테고리 */}
          <Grid item width={250} pl={2}>
            <TextField
              select
              defaultValue={careerNames[0].text}
              size="small"
              variant="standard"
              fullWidth
              inputProps={register('actName')}
            >
              {careerNames.map((careerName) => (
                <MenuItem value={careerName.text} key={careerName.id}>
                  {careerName.text}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container>
          {/* 기관 */}
          <Grid item flexGrow={1}>
            <TextField
              variant="standard"
              {...register('agencyName')}
              placeholder="기관"
              sx={{
                width: '95%',
              }}
            />
          </Grid>
          {/* 기간 */}
          <Grid item xs={'auto'}>
            기간 :{' '}
            <input
              type="date"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '16px',
              }}
              {...register('trem')}
            />{' '}
            ~{' '}
            <input
              type="date"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '16px',
              }}
              // FIXME:  기간 종료일 {...register('')} 필요
            />
          </Grid>
        </Grid>

        {/* 컨텐츠 */}
        <Grid item>
          <textarea
            maxLength={60}
            {...register('content')}
            style={{
              width: '100%',
              fontSize: '16px',
              padding: '5px',
              resize: 'none',
              height: '200px',
            }}
          ></textarea>
        </Grid>

        {/* 버튼 */}
        <Grid container justifyContent={'center'} alignItems={'center'} columnSpacing={6}>
          <Grid item width={170}>
            <BoardButton type="submit" variant="outlined" color="inherit" fullWidth>
              완료
            </BoardButton>
          </Grid>
          <Grid item width={170}>
            <BoardButton variant="outlined" color="inherit" fullWidth>
              취소
            </BoardButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default BoardWrite;
