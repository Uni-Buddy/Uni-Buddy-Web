import { SemesterTime } from '@components/semester-info/time-table/data';
import { object, number, InferType } from 'yup';

export const semesterSchema = object({
  semester: number().required(),
  semesterType: number().required(),
  avgScore: number().required(),
  getScore: number().required(),
  maxAvgScore: number().required(),
  maxGetScore: number().required(),
});

export type Semester = InferType<typeof semesterSchema>;

export type SemesterState = {
  semester: Semester;
  semesterTimes: SemesterTime[];
  isShowModal: boolean;
  selectedSemesterTime: SemesterTime;
};
