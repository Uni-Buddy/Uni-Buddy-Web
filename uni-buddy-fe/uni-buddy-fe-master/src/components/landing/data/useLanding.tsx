import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLanding = () => {
  const navigate = useNavigate();
  const [isHeaderlineScreen, setIsHeaderlineScreen] = useState(false);

  // 화면을 스크롤 없이 표현하기 위해 body의 overflowY를 hidden처리
  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;
    body.style.overflowY = 'hidden';
    return () => {
      body.style.overflowY = 'auto';
    };
  });

  return {
    navigate,
    isHeaderlineScreen,
    setIsHeaderlineScreen,
  };
};

export default useLanding;
