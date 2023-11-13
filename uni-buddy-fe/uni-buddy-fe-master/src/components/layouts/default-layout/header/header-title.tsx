import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

function HeaderTitle(): JSX.Element {
  const path = useLocation().pathname;
  const title: { [key: string]: string } = {
    '/board/list': '게시판',
    '/board/write': '기록',
    '/schedules': '일정',
    '/semester-info': '시간표',
    '/mypage': '내정보',
    '/mypage/edit-password': '비밀번호 변경',
  };

  return (
    <Typography variant="h4" align="left" fontWeight={700}>
      {title[path]}
    </Typography>
  );
}

export default HeaderTitle;
