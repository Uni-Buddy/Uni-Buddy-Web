import { mypageEditProfileSchema } from '@type/mypage/mypage.types';
import { InferType } from 'yup';

// mypageEditSchema를 통해 추론된 타입을 MypageEdit로 지정
export type MypageEdit = InferType<typeof mypageEditProfileSchema>;
