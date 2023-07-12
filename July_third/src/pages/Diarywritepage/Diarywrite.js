// 일지 작성 페이지

import './Diarywrite.css';
import Head from './img/Start.png';
import Logo from './img/Logo.png';
import Icon from './img/Write.png';
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
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Write_Head" />
        <div className="Write_Icon">
          <img src={Icon} alt="Icon" className="Write_Writeimg" />
          <p className="Write_Iconwrite">기록</p>
        </div>
      </header>
      {/* 로고 및 메뉴바 */}
      <nav className="Write_Nav">
        <img src={Logo} alt="Logo" className="Write_Logo" onClick={goshare} />
        <section className="Write_Menu">
          <button className="Write_Diarylist" onClick={godiarylist}>
            게시판
          </button>
          <button className="Write_Calendar" onClick={gocalendar}>
            일정
          </button>
          <button className="Write_Diary" onClick={godiarywrite}>
            기록
          </button>
          <button className="Write_Time" onClick={gotime}>
            시간표
          </button>
          <button className="Write_Mypage" onClick={gomypage}>
            내정보
          </button>
          <button className="Write_Logout" onClick={gologout}>
            로그아웃
          </button>
        </section>
      </nav>
      {/* 일지 작성 */}

      {/*
      <div className="Write_Box">일지 작성</div>
      
      */}
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
