import { ROUTES } from '@libs/router/data';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MypageEdit } from './editProfile.types';
import { toast } from 'react-toastify';
import { dummyGetDetail, uploadImage } from '.';
import { mypageEditProfileSchema } from '@type/mypage/mypage.types';

const useEditProfile = () => {
  const navigate = useNavigate();
  // FIXME:TESTCODE
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mypageEditProfileSchema),
    defaultValues: async () => {
      const res = await dummyGetDetail();
      if (res) {
        return {
          name: res?.name || '',
          email: res?.email || '',
          university: res?.university || '',
          phone: res?.phone || '',
          birth: res?.birth || '',
          education: res?.education || '',
          picture: res?.picture || '',
          additionalInfoName: res?.additionalInfoName || '',
          additionalInfoValue: res?.additionalInfoValue || '',
        };
      } else {
        return {
          name: '홍길동',
          email: 'honggildong@gmail.com',
          university: '서울대학교',
          phone: '010-1234-5678',
          birth: '1999-11-11',
          education: '컴퓨터공학과',
          picture: 'https://picsum.photos/200',
          additionalInfoName: '학번',
          additionalInfoValue: '2019-12345',
        };
      }
    },
  });

  const handleUploadImage = (file: FormData) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      uploadImage(formData).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProfile = (newProfile: MypageEdit) => {
    console.log(newProfile);
    toast.success('프로필 수정 완료');
  };

  const handleGoToMypage = () => {
    navigate(ROUTES.MYPAGE.VIEW.path);
  };

  return { register, handleSubmit, handleEditProfile, errors, handleGoToMypage, handleUploadImage, control };
};

export default useEditProfile;
