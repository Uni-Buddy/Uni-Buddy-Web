// 메뉴바

import Logo from './img/Logo.png';
import './Diarylist.css';

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
    <nav className="List_Nav">
      <img src={Logo} alt="Logo" className="List_Logo" onClick={goshare} />
      <section className="List_Menu">
        <button className="List_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="List_Calendar" onClick={gocalendar}>
          일정
        </button>
        <button className="List_Diary" onClick={godiarywrite}>
          기록
        </button>
        <button className="List_Time" onClick={gotime}>
          시간표
        </button>
        <button className="List_Mypage" onClick={gomypage}>
          내정보
        </button>
        <button className="List_Logout" onClick={gologout}>
          로그아웃
        </button>
      </section>
    </nav>
  );
};

export default Nav;
