import { http } from '@libs/http';
import { ResSemesterInfo, semesterInfoAdd } from './semesterInfo.types';

export const getScores = (semester: number) => http.get<ResSemesterInfo>(`/scores/${semester}`);
export const postScores = (semesterInfo: semesterInfoAdd) => http.post<ResSemesterInfo>(`/scores/`, semesterInfo);
