import './Nav.css';

const Nav = () => {
  return (
    <nav className="Menu">
      <p className="List">게시판</p>&nbsp;
      <p className="Calendar">캘린더</p>&nbsp;
      <p className="Diary">일지</p>&nbsp;
      <p className="Schedule">시간표</p>&nbsp;
      <p className="Mypage">마이페이지</p>&nbsp;
      <p className="Logout">로그아웃</p>
    </nav>
  );
};

export default Nav;
