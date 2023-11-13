import { http } from '@libs/http';
import { ReqMyPageView, ResMyPageView } from './mypageView.types';

export const getMyPageInfo = (idToken: ReqMyPageView) => http.post<ResMyPageView>('/v1/users/info', idToken); // FIXME: API 연동
