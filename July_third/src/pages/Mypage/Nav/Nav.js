import './Nav.css';
import Logo from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  // 로고 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }
  // 메뉴의 페이지 이동

  function godiarylist() {
    movePage('/Diarylist');
  }
  function gocalendar() {
    movePage('/Calendar');
  }
  function godiarywrite() {
    movePage('/Diarywrite');
  }
  function gotime() {
    movePage('/Time');
  }
  function gomypage() {
    movePage('/Mypage');
  }
  function gologout() {
    movePage('/Start');
  }

  return (
    <nav className="My_Nav">
      <img src={Logo} alt="Logo" className="My_Logo" onClick={goshare} />
      <section className="My_Menu">
        <button className="My_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="My_Calendar" onClick={gocalendar}>
          일정
        </button>
        <button className="My_Diary" onClick={godiarywrite}>
          기록
        </button>
        <button className="My_Time" onClick={gotime}>
          시간표
        </button>
        <button className="My_Mypage" onClick={gomypage}>
          내정보
        </button>
        <button className="My_Logout" onClick={gologout}>
          로그아웃
        </button>
      </section>
    </nav>
  );
};

export default Nav;
