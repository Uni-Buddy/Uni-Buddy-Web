import { ROUTES } from '@libs/router/data';
import { useAppSelector } from '@libs/stores';
import { throttle } from 'lodash-es';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('');
  const isMainPage = location.pathname === ROUTES.INDEX.path;
  const careersList = useAppSelector((state) => state.career.careersList);

  const menus = [
    {
      id: 1,
      text: '게시판',
      onClick: () => {
        navigate(ROUTES.BOARD.LIST.path);
        setSelectedMenu('게시판');
      },
    },
    {
      id: 2,
      text: '일정',
      onClick: () => {
        navigate(ROUTES.SCHEDULES.path);
        setSelectedMenu('일정');
      },
    },
    {
      id: 3,
      text: '기록',
      onClick: () => {
        navigate(ROUTES.BOARD.WRITE.path);
        setSelectedMenu('기록');
      },
    },
    {
      id: 4,
      text: '시간표',
      onClick: () => {
        navigate(ROUTES.SEMESTER_INFO.path);
        setSelectedMenu('시간표');
      },
    },
    {
      id: 5,
      text: '내정보',
      onClick: () => {
        navigate(ROUTES.MYPAGE.VIEW.path);
        setSelectedMenu('내정보');
      },
    },
    {
      id: 6,
      text: '로그아웃',
      onClick: () => {
        window.sessionStorage.removeItem('user');
        navigate(ROUTES.LANDING.path);
      },
    },
  ];

  const handleGotoTopScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleGotoMainPage = () => {
    navigate(ROUTES.INDEX.path);
    setSelectedMenu('');
  };

  const getIsScrollTopPosition = throttle(() => {
    setIsTopScroll(window.scrollY === 0);
  }, 300);

  const [isTopScroll, setIsTopScroll] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', getIsScrollTopPosition);
    return () => document.removeEventListener('scroll', getIsScrollTopPosition);
  }, []);

  return { menus, handleGotoTopScroll, selectedMenu, isMainPage, handleGotoMainPage, isTopScroll, careersList };
};

export default useNav;
