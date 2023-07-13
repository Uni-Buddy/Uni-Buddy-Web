// 일지 작성 페이지

import './Diarywrite.css';
import Logo from './img/Logo.png';
import { useNavigate } from 'react-router-dom';

const Diarywrite = () => {
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
    <header>
      {/* 로고 */}
      <div className="Header">
        <img src={Logo} alt="Logo" className="Write_Logo" onClick={goshare} />
      </div>
      {/* 메뉴 */}
      <nav className="Write_Menu">
        <button className="Write_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="Write_Calendar" onClick={gocalendar}>
          캘린더
        </button>
        <button className="Write_Diary" onClick={godiarywrite}>
          일지
        </button>
        <button className="Write_Time" onClick={gotime}>
          시간표
        </button>
        <button className="Write_Mypage" onClick={gomypage}>
          마이페이지
        </button>
        <button className="Write_Logout" onClick={gologout}>
          로그아웃
        </button>
      </nav>
      {/* 일지 작성 */}
      <section className="Write_Section">
        <article className="Write_Article">
          {/* 일지 제목 */}
          <input className="Write_Title" type="text" placeholder="제목" />
          {/* 구분선 = 직선 = hr태그 */}
          <hr />
          {/* 일지 날짜 */}
          <input className="Write_Date" type="date" placeholder="날짜" />
          {/* 일지 내용 */}
          <textarea className="Write_Text"></textarea>
          {/* 완료 및 취소 버튼 */}
          <aside className="Write_Aside">
            {/* 완료 버튼 */}
            <button className="Write_Button">완료</button>
            {/* 취소 버튼 */}
            <button className="Write_Button">취소</button>
          </aside>
        </article>
      </section>
    </header>
  );
};

export default Diarywrite;

/*
      <nav className="Menu">
        <p className="List">Board</p>&nbsp;
        <p className="Calendar">Cal</p>&nbsp;
        <p className="Diary">Diary</p>&nbsp;
        <p className="Schedule">Time</p>&nbsp;
        <p className="Mypage">My page</p>&nbsp;
        <p className="Logout">Logout</p>
      </nav>
*/
