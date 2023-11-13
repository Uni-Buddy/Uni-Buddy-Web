import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Grid } from '@mui/material';
import { format } from 'date-fns';
import { TimeTableCellProps, useTimeTableCell } from './data';
const TimeTableCell = ({ event }: TimeTableCellProps) => {
  const { isHover, setIsHover, handleBtnClick } = useTimeTableCell(event);

  return (
    <>
      <Grid
        sx={{
          backgroundColor: event.color,
        }}
        height={'100%'}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {/* 버튼영역 */}
        {isHover && (
          <Grid container position={'absolute'} width={'100%'} justifyContent={'right'}>
            <Grid item xs="auto">
              <IconButton
                sx={{
                  padding: 0,
                  zIndex: 2,
                }}
                onClick={(e) => {
                  handleBtnClick(e, 'edit');
                }}
              >
                <EditIcon
                  sx={{
                    color: 'white',
                    width: '15px',
                  }}
                />
              </IconButton>
            </Grid>

            <Grid item xs="auto">
              <IconButton
                sx={{
                  padding: 0,
                  zIndex: 2,
                }}
                onClick={(e) => {
                  handleBtnClick(e, 'delete');
                }}
              >
                <ClearIcon
                  sx={{
                    color: 'white',
                    width: '15px',
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        )}

        <Grid container width={'100%'} alignItems={'center'} height={'100%'} fontSize={'0.75rem'} pt={1} ml={0.5}>
          <Grid container>
            <Grid item xs={12}>
              {event.title}
            </Grid>
            <Grid item xs={12}>
              {format(event.start, 'HH')} ~ {format(event.end, 'HH')}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TimeTableCell;
