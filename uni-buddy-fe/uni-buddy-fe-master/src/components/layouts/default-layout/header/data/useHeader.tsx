import { ROUTES } from '@libs/router/data';
import { useLocation, useNavigate } from 'react-router-dom';

const useHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === ROUTES.INDEX.path;

  // 새로고침
  const handlePageRefresh = () => {
    navigate(0);
  };

  return { isMainPage, handlePageRefresh };
};

export default useHeader;
