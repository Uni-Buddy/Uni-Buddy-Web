// 메뉴바

import Icon from './img/Share2.png';
import './Share.css';

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
    <nav className="Share_Nav">
      <img src={Icon} alt="Icon" className="Share_Shareimg" onClick={goshare} />
      <section className="Share_Menu">
        <button className="Share_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="Share_Calendar" onClick={gocalendar}>
          일정
        </button>
        <button className="Share_Diary" onClick={godiarywrite}>
          기록
        </button>
        <button className="Share_Time" onClick={gotime}>
          시간표
        </button>
        <button className="Share_Mypage" onClick={gomypage}>
          내정보
        </button>
        <button className="Share_Logout" onClick={gologout}>
          로그아웃
        </button>
      </section>
    </nav>
  );
};

export default Nav;
