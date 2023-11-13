import { InferType, object, string, ref } from 'yup';

const phoneRules = /^\d{3}-\d{3,4}-\d{4}$/;
const passwordRules = /^(?=.*\d)(?=.*[A-z])(?=.*[`~!@#$%^&*|\\'";:/?]).{8,30}$/;

// 프로필 수정 화면 유효성 검사
export const mypageEditProfileSchema = object({
  name: string().required('이름을 입력해주세요.'),
  email: string().email('이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
  university: string().required('대학교명은 필수 항목입니다.').min(3, '올바른 대학명을 입력해주세요.'),
  phone: string().matches(phoneRules, '올바른 전화번호를 입력해주세요.'),
  birth: string().required('생년월일을 입력해주세요.'),
  education: string(),
  picture: string(),
  // 추가정보의 경우, 선택사항이기 때문에 required가 아닌 optional로 설정
  additionalInfoName: string(),
  additionalInfoValue: string(),
});

// 비밀번호 변경 화면 유효성 검사
export const mypageEditPasswordSchema = object({
  currentPw: string().required('현재 비밀번호를 입력해주세요.'),
  pw: string()
    .required('새 비밀번호를 입력해주세요.')
    .matches(passwordRules, { message: '숫자, 영문자, 특수문자 조합으로 8자리 이상 입력하세요.' }),
  pwConfirmation: string()
    .required('새 비밀번호 확인을 입력해주세요.')
    .oneOf([ref('pw')], '비밀번호가 일치하지 않습니다.'),
});

export type MypageEditProfile = InferType<typeof mypageEditProfileSchema>;
export type MypageEditPassword = InferType<typeof mypageEditPasswordSchema>;
