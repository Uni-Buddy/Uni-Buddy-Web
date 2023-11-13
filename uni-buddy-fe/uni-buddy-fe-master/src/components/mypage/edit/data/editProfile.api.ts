import { http } from '@libs/http';
import { MypageEdit } from './editProfile.types';

export const getDetail = () => http.get<MypageEdit>('/v1/mypage');
export const setDetail = (mypageEdit: MypageEdit) => http.put('/v1/mypage', mypageEdit);
export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return http.post('/v1/mypage/upload', formData);
};

// TODO: 개발용 더미 데이터
export const dummyGetDetail = () => {
  return new Promise<MypageEdit>((resolve) => {
    setTimeout(() => {
      resolve({
        name: '홍길동',
        email: 'honggildong@gmail.com',
        university: '서울대학교',
        phone: '010-1234-5678',
        birth: '1994-10-25',
        education: '컴퓨터공학과',
        picture: 'https://picsum.photos/200',
        additionalInfoName: '학번',
        additionalInfoValue: '2019-12345',
      });
    }, 1000);
  });
};
