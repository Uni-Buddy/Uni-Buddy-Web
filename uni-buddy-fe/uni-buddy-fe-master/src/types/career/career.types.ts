import { InferType, number, object, string } from 'yup';

export const careerSchema = object({
  actId: number().required(),
  title: string().required('제목은 필수 항목입니다.'),
  actName: string().required('카테고리는 필수 항목입니다.'),
  agencyName: string().required('기관은 필수 항목입니다.'),
  trem: string(), //FIXME:?
  content: string().required('내용은 필수 항목입니다.'),
});

export type Career = InferType<typeof careerSchema>;
