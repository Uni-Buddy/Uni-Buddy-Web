import { mypageEditPasswordSchema } from '@type/mypage/mypage.types';
import { InferType } from 'yup';

// mypageEditPasswordSchema를 통해 추론된 타입을 MypageEditPassword로 지정
export type MypageEditPassword = InferType<typeof mypageEditPasswordSchema>;
export type ReqMypageEditPassword = Partial<MypageEditPassword & { idToken: string }>;
