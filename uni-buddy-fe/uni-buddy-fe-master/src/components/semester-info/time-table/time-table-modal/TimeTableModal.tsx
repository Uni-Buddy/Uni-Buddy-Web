import { FormControlLabel, RadioGroup, TextField, Grid, Typography, Radio, MenuItem, Button } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TimeTableModalProps, useTimeTableModal } from './data';

const TimeTableModal = ({ close }: TimeTableModalProps) => {
  const {
    selectedSemesterTime,
    register,
    isEditMode,
    handleSubmit,
    handleInsertSemesterTime,
    errors,
    control,
    dates,
    times,
    handleClose,
  } = useTimeTableModal(close);

  return (
    <form onSubmit={handleSubmit(handleInsertSemesterTime)} className="time-table-modal">
      <Grid
        container
        direction={'column'}
        p={5}
        width={450}
        height={780}
        sx={{
          background: '#fff',
        }}
        zIndex={10}
      >
        <Grid item textAlign={'center'} mb={4}>
          <Typography variant="h5">강의정보 입력</Typography>
        </Grid>
        {isEditMode && <input type="hidden" {...register('subName')} />}

        <Grid item height={90}>
          <TextField
            placeholder="강의명"
            {...register('subName')}
            fullWidth
            error={!!errors.subName}
            helperText={errors.subName ? errors.subName?.message : ''}
          />
        </Grid>
        <Grid item height={90}>
          <TextField
            placeholder="교수명"
            {...register('proName')}
            fullWidth
            error={!!errors.proName}
            helperText={errors.proName ? errors.proName?.message : ''}
          />
        </Grid>
        <Grid item height={90}>
          <TextField
            placeholder="강의실"
            {...register('classroom')}
            fullWidth
            error={!!errors.classroom}
            helperText={errors.classroom ? errors.classroom?.message : ''}
          />
        </Grid>
        <Grid item height={90}>
          요일
          <br />
          <Controller
            name={'date'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={(e) => e && onChange(e)}
                row
                defaultValue={isEditMode ? selectedSemesterTime.date : dates[0]}
              >
                {dates.map((date) => (
                  <FormControlLabel key={date} value={date} label={date} control={<Radio />} />
                ))}
              </RadioGroup>
            )}
          />
        </Grid>

        <Grid item height={90}>
          <TextField
            label="시작 시간"
            select
            defaultValue={isEditMode ? selectedSemesterTime.startTime : times[0]}
            fullWidth
            inputProps={register('startTime')}
            error={!!errors.startTime}
            helperText={errors.startTime ? errors.startTime?.message : ''}
          >
            {times.map((time) => (
              <MenuItem value={time} key={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item height={90}>
          <TextField
            label="종료 시간"
            select
            defaultValue={isEditMode ? selectedSemesterTime.endTime : times[1]}
            fullWidth
            inputProps={register('endTime')}
            error={!!errors.endTime}
            helperText={errors.endTime ? errors.endTime?.message : ''}
          >
            {times.map((time) => (
              <MenuItem value={time} key={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          색상표 색상: <input type="color" {...register('color')} />
        </Grid>

        <Grid item textAlign={'right'}>
          <Button onClick={handleClose}>취소</Button>
          <Button type="submit">입력</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TimeTableModal;
