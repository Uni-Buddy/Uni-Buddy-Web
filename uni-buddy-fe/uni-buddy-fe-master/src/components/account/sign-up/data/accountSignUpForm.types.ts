import { object, ref, string, InferType, boolean } from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[A-z])(?=.*[`~!@#$%^&*|\\'";:/?]).{8,30}$/;

export const signUpSchema = object().shape({
  email: string().email('올바른 이메일 형식이 아닙니다.').required('이메일은 필수 항목입니다.'),
  pw: string()
    .required('비밀번호는 필수 항목입니다.')
    .matches(passwordRules, { message: '숫자, 영문자, 특수문자 조합으로 8자리 이상 입력하세요.' }),
  pwConfirmation: string()
    .required('비밀번호 재입력은 필수 항목입니다.')
    .oneOf([ref('pw')], '비밀번호가 다릅니다.'),
  name: string().required('이름은 필수 항목입니다.').min(2, '올바른 이름을 입력해주세요.'),
  university: string().required('대학교명은 필수 항목입니다.').min(3, '올바른 대학명을 입력해주세요.'),
  terms: boolean().required().oneOf([true], '약관 동의는 필수 항목입니다.'),
});

export type SignUp = InferType<typeof signUpSchema>;

export type ReqSignUp = {
  email: string;
  pw: string;
};

export type ResSignUp = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};

export type AlertColor = 'success' | 'info' | 'warning' | 'error';

export type SignUpGuideAlert = {
  type: AlertColor;
  msg: string;
};
