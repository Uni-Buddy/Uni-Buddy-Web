import './Nav.css';
import Logo from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  // 메뉴의 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }
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
    <nav className="Time_Nav">
      <img src={Logo} alt="Logo" className="Time_Logo" onClick={goshare} />
      <section className="Time_Menu">
        <button className="Time_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="Time_Calendar" onClick={gocalendar}>
          일정
        </button>
        <button className="Time_Diary" onClick={godiarywrite}>
          기록
        </button>
        <button className="Time_Time" onClick={gotime}>
          시간표
        </button>
        <button className="Time_Mypage" onClick={gomypage}>
          내정보
        </button>
        <button className="Time_Logout" onClick={gologout}>
          로그아웃
        </button>
      </section>
    </nav>
  );
};

export default Nav;
