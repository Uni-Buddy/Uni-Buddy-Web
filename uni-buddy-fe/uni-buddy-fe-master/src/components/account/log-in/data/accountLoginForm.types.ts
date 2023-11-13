import { HttpResponse } from '@libs/http/axios.types';
import { InferType, object, string } from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[A-z])(?=.*[`~!@#$%^&*|\\'";:/?]).{8,30}$/;

export const loginSchema = object().shape({
  email: string().email('올바른 이메일을 입력해주세요.').required('이메일은 필수 항목입니다.'),
  pw: string()
    .required('비밀번호는 필수 항목입니다.')
    .matches(passwordRules, { message: '숫자, 영문자, 특수문자 조합으로 8자리 이상 입력하세요.' }),
});

export type Login = InferType<typeof loginSchema>;

export type User = {
  id: number;
  email: string;
  pw: string;
  university: string;
  name: string;
  hash: string;
  sns: string;
  phone: string;
  education: string;
  newPw: string;
  birthday: string;
  comment: string;
};

export type LoginUserData = User & {
  token: string;
};
export type ResLogin = HttpResponse & {
  status: number;
  message: string;
  data: LoginUserData | null;
};
