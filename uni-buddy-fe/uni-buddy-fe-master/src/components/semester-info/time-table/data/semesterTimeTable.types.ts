import { object, string, number, InferType, ref } from 'yup';
export const semesterTimeSchema = object({
  subNum: number().required(),
  subName: string().required('강의명은 필수 항목입니다.'),
  proName: string().required('교수명은 필수 항목입니다.'),
  classroom: string().required('강의실은 필수 항목입니다.'),
  date: string().required('요일은 필수 항목입니다.'),
  startTime: number().required('시작시간은 필수 항목입니다.'),
  endTime: number()
    .required('종료시간은 필수 항목입니다.')
    .moreThan(ref('startTime'), '종료시간은 시작시간보다 커야 합니다.'),
  color: string().required('시간표 색상은 필수 항목입니다.'),
});

export type SemesterTime = InferType<typeof semesterTimeSchema>;

export const semesterTimeAddSchema = semesterTimeSchema.omit(['subNum']);
export type SemesterTimeAdd = InferType<typeof semesterTimeAddSchema>;

export type TimeTableEvent = {
  event_id: number | string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
};
