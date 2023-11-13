import { ROUTES } from '@libs/router/data';
import { useNavigate } from 'react-router-dom';

const useMyPageView = () => {
  const navigate = useNavigate();

  // 프로필 수정 페이지로 이동 핸들러
  const handleGotoEditProfile = () => {
    navigate(ROUTES.MYPAGE.EDIT_PROFILE.path);
  };

  // 비밀번호 수정 페이지로 이동 핸들러
  const handleGotoEditPassword = () => {
    navigate(ROUTES.MYPAGE.EDIT_PASSWORD.path);
  };

  return { handleGotoEditProfile, handleGotoEditPassword };
};

export default useMyPageView;
