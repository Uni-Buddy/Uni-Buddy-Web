import { HttpResponse } from '@libs/http/axios.types';
import { Semester } from '@libs/stores/semester';

export type ResSemesterInfo = HttpResponse & {
  status: number;
  message: string;
  data: Semester;
};

export type semesterInfoAdd = Omit<Semester, 'semester'>;
