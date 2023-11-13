import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CareersList, careerState } from './career.types';

const initialState: careerState = {
  //   FIXME:TESTCOD
  careersList: {
    교내활동: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사자호랑이늑대거북이',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사하러 순천을 다녀왔습니다. 저는 매년 자원봉사 활동을 열심히 참여합니다.',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    교외활동: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    자격증: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    어학: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],
  },
};

export const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    setCareersList: (state, { payload: careersList }: PayloadAction<CareersList>) => {
      state.careersList = careersList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCareersList } = careerSlice.actions;
