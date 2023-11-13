import { ROUTES } from '@libs/router/data';
import { useNavigate } from 'react-router-dom';

const useBoardList = () => {
  const navigate = useNavigate();

  const handleGotoBoardWrite = () => {
    navigate(ROUTES.BOARD.WRITE.path);
  };
  return { handleGotoBoardWrite };
};

export default useBoardList;
