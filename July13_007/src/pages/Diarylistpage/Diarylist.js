// 일지 목록 페이지

import Head from './img/Start.png';
import Nav from './Nav.js';
import Icon from './img/List2.png';
//import Categoryhide from './Categoryhide';
//import Listhide from './Listhide';
import Top from './Top.js';
//import { useState } from 'react';
import './Diarylist.css';
//import Button from './Button';

const Diarylist = () => {
  // 카테고리 버튼 클릭에 따른 내용 표시 및 숨기기
  // const [visible, setVisible] = useState(false);

  return (
    <header>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="List_Head" />
        <div className="List_Icon">
          <img src={Icon} alt="Icon" className="List_Listimg" />
          <p className="List_Iconwrite">리스트</p>
        </div>
      </header>
      {/* 메뉴바 */}
      <Nav />
      {/* 최신글 2개 */}
      <section className="List_Section">
        <div className="List_New">최신글</div>
        <div className="List_Listbox">
          <div className="List_Title">제목</div>
          <div className="List_Content">내용</div>
        </div>
        <hr className="List_Hr" />
        <div className="List_Listbox">
          <div className="List_Title">제목</div>
          <div className="List_Content">내용</div>
        </div>
        <hr className="List_Hr" />
      </section>
      {/* 화면 최상단으로 이동하는 버튼 */}
      <footer className="List_Footer">
        <Top />
      </footer>
    </header>
  );
};

export default Diarylist;

/*
<section className="List_section">
{/*카테고리 및 카테고리 리스트 - 왼쪽 내용 
카테고리 리스트 : 교내활동, 교외활동, 자격증, 어학
<aside className="List_Leftbox">
            카테고리 옆 삼각형 기호 변화
            <button
              className="List_Category"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible ? '카테고리  ▼' : '카테고리  ▶'}
            </button>
            <hr />
            {visible && <Categoryhide />}
          </aside>
          {/*카테고리 버튼 클릭에 따른 내용 표시 및 숨기기
              내용 : 카테고리 리스트 및 일지 리스트 
              일지 리스트 : 일지 제목, 일지 내용, 기간 등 일지 정보가 담긴 리스트
<article className="List_Rightbox">{visible && <Listhide />}</article>
</section>
*/
