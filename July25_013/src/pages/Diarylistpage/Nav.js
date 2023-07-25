// 메뉴바

import Logo from "../component/Logo2.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  // 스크롤 이벤트 처리
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  // 메뉴의 페이지 이동
  const movePage = useNavigate();

  const goshare = () => {
    movePage("/Share");
  };
  function godiarylist() {
    movePage("/Diarylist");
  }
  function gocalendar() {
    movePage("/Calendar");
  }
  function godiarywrite() {
    movePage("/Diarywrite");
  }
  function gotime() {
    movePage("/Time");
  }
  function gomypage() {
    movePage("/Mypage");
  }
  function gologout() {
    movePage("/Start");
  }

  return (
    <nav className={ScrollActive ? "List_Nav fixed" : "List_Nav"}>
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
