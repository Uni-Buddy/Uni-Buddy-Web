import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Semester, SemesterState } from './semester.types';
import { SemesterTime } from '@components/semester-info/time-table/data';

const initialState: SemesterState = {
  semester: {
    semester: 0,
    semesterType: 11,
    avgScore: 0,
    maxAvgScore: 4.5,
    getScore: 0,
    maxGetScore: 0,
  },

  // FIXME:TESTCODE
  semesterTimes: [
    {
      subNum: 1,
      subName: '지구과학',
      proName: '에디슨',
      classroom: '한강',
      date: '월',
      startTime: 10,
      endTime: 11,
      color: '#142142',
    },
    {
      subNum: 2,
      subName: '지구과학',
      proName: '에디슨',
      classroom: '한강',
      date: '월',
      startTime: 12,
      endTime: 14,
      color: '#455142',
    },
    {
      subNum: 3,
      subName: '지구과학',
      proName: '에디슨',
      classroom: '한강',
      date: '화',
      startTime: 11,
      endTime: 14,
      color: '#663890',
    },
  ],

  isShowModal: false,
  selectedSemesterTime: {
    subNum: 0,
    classroom: '',
    color: '',
    date: '',
    endTime: 0,
    proName: '',
    startTime: 0,
    subName: '',
  },
};

export const semesterSlice = createSlice({
  name: 'semester',
  initialState,
  reducers: {
    setSemester: (state, { payload: semester }: PayloadAction<Semester>) => {
      state.semester = semester;
    },
    setSemesterTimes: (state, { payload: semesterTimes }: PayloadAction<SemesterTime[]>) => {
      state.semesterTimes = semesterTimes;
    },
    setIsShoModal: (state, { payload: isShowModal }: PayloadAction<boolean>) => {
      state.isShowModal = isShowModal;
    },
    setSelectedSemesterTime: (state, { payload: selectedSemesterTime }: PayloadAction<SemesterTime>) => {
      state.selectedSemesterTime = selectedSemesterTime;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSemester, setSemesterTimes, setIsShoModal, setSelectedSemesterTime } = semesterSlice.actions;
