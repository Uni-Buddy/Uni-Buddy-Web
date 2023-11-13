import { http } from '@libs/http';
import { Schedule } from '@libs/stores/schedules/schedules.types';
import { AxiosResponse } from 'axios';

// year년 month월의 스케줄 목록을 가져온다. (-1월과 +1월의 스케줄도 가져온다.)
export const getSchedules = (current: Date): Promise<AxiosResponse<Schedule[]>> =>
  http.get(`/schedules/${current.getFullYear()}/${current.getMonth() + 1}`);

// 스케줄을 추가한다.
export const addSchedule = (currentDate: Date): Promise<AxiosResponse<Schedule>> =>
  http.post(`/schedules/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`, {
    body: {
      title: '',
      date: '',
    },
  });

// 스케줄을 삭제한다.
export const deleteSchedule = (scheduleId: number) => http.delete(`/schedules/${scheduleId}`);

// 월간 목표를 가져온다. year년 month월의 목표를 가져온다.
export const getMonthlyGoal = (currentDate: Date): Promise<AxiosResponse<string>> =>
  http.get(`/goals/month/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`);

// 월간 목표를 설정한다. year년 month월의 목표를 설정한다.
export const setMonthlyGoal = (currentDate: Date, goal: string): Promise<AxiosResponse<string>> =>
  http.post(`/goals/month/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`, {
    body: {
      goal: goal,
    },
  });
