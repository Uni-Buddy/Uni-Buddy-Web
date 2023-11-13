import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Schedule } from './schedules.types';

const initialState = {
  schedules: [],
  currentDate: new Date(),
};

export const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    addSchedule(state, action: PayloadAction<Schedule>) {
      state.schedules.push(action.payload);
    },
    removeSchedule(state, action: PayloadAction<string>) {
      return state.schedules.filter((schedule) => schedule.id !== action.payload);
    },
    setCurrentDate(state, action: PayloadAction<Date>) {
      state.currentDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSchedule, removeSchedule, setCurrentDate } = schedulesSlice.actions;
