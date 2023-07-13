// 시간표 페이지

import Timetable from './Timetable/Timetable';
import Semester from './Semester/Semester';
import Head from './img/Start.png';
import Logo from './img/Logo.png'
import Icon from './img/Month.png';
import './Time.css';
import { useNavigate } from 'react-router-dom';

function Timetablepage() {

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
    <>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Time_Head" />
        <div className="Time_Icon">
          <img src={Icon} alt="Icon" className="Time_Month" />
          <p className="Write_Iconwrite">시간표</p>
        </div>
      </header>
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


      <div className="all">
        <Semester />
        <Timetable />
      </div>
    </>
  );
};

export default Timetablepage;
