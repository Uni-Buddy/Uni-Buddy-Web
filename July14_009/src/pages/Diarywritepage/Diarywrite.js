// 일지 작성 페이지

import './Diarywrite.css';
import Head from './img/Start.png';
import Icon from './img/Write.png';
import Nav from './Nav.js';
import Top from '../component/Top.js';

const Diarywrite = () => {
  return (
    <header>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Write_Head" />
        <div className="Write_Icon">
          <div className="Write_Bigcircle">
            <img src={Icon} alt="Icon" className="Write_Writeimg" />
          </div>
          <div className="Write_Smallcircle"></div>
          <p className="Write_Iconwrite">기록</p>
        </div>
      </header>
      {/* 로고 및 메뉴바 */}
      <Nav />
      {/* 일지 작성 */}

      {/*
      <div className="Write_Box">일지 작성</div>
      
      */}
      <section className="Write_Section">
        <article className="Write_Article">
          {/* 일지 : 제목 */}
          <input className="Write_Title" type="text" placeholder="제목" />
          {/* 구분선 = 직선 = hr태그 */}
          <hr className="Write_Hr" />
          {/* 일지 : 기관 */}
          <span className="Write_Place1">기관&nbsp;&nbsp;:</span>
          <input className="Write_Place2" type="text" placeholder="" />

          {/* 일지 : 날짜 */}
          <span className="Write_Date1">날짜&nbsp;&nbsp;:</span>
          <input className="Write_Date2" type="date" placeholder="날짜"></input>
          {/* 일지 : 내용 */}
          <textarea className="Write_Text"></textarea>
          {/* 완료 및 취소 버튼 */}
          <aside className="Write_Aside">
            {/* 완료 버튼 */}
            <button className="Write_Button1">완료</button>
            {/* 취소 버튼 */}
            <button className="Write_Button1">취소</button>
          </aside>
        </article>
      </section>
      {/* 화면 최상단으로 이동하는 버튼 */}
      <footer className="Write_Footer">
        <Top />
      </footer>
    </header>
  );
};

export default Diarywrite;
