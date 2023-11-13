import { styled } from '@mui/material';
import { useLocation } from 'react-router-dom';

function HeaderIcon() {
  const path = useLocation().pathname;
  const icon: { [key: string]: string } = {
    '/board/list': '/images/icons/board-list.png',
    '/board/write': '/images/icons/board-write.png',
    '/schedules': '/images/icons/schedules.png',
    '/semester-info': '/images/icons/schedules.png',
    '/mypage/view': '/images/icons/mypage.png',
    '/mypage/edit-profile': '/images/icons/mypage.png',
    '/mypage/edit-password': '/images/icons/mypage.png',
  };

  const HeaderIcon = styled('img')`
    width: 100%;
    height: 100%;
  `;

  return <HeaderIcon alt={path} src={icon[path]} />;
}

export default HeaderIcon;
