import { http } from '@libs/http';
import { MypageEditPassword, ReqMypageEditPassword } from './editPassword.types';

export const editPassword = (idToken: string, mypageEditPassword: MypageEditPassword) =>
  http.post<ReqMypageEditPassword>('/v1/users/info/pw', {
    ...mypageEditPassword,
    idToken,
  });
