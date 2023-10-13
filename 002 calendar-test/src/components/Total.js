// 캘린더 페이지

import React from "react";
import Calendar from "./calendar/calendar";
import TodoList from "./TodoList";
import Top from "./Top";
import Head from "./img/Start.png";
import Icon from "./img/Month.png";
import Nav from "./Nav";
import "./Total.css";

const Total = () => {
  return (
    <>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Cal_Head" />
        <div className="Cal_Icon">
          <div className="Cal_Bigcircle">
            <img src={Icon} alt="Icon" className="Cal_img" />
          </div>
          <div className="Cal_Smallcircle"></div>
          <p className="Cal_Icontext">캘린더</p>
        </div>
      </header>
      {/* 로고 및 메뉴바 */}
      <nav className="Cal_Nav">
        <Nav />
      </nav>
      {/* 캘린더 */}
      <div className="Cal_Content">
        <TodoList />
        <Calendar />
      </div>
      {/* 화면 최상단으로 이동하는 버튼 */}
      <footer className="Cal_Footer">
        <Top />
      </footer>
    </>
  );
};

export default Total;
