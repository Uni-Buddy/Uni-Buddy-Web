// 시작 페이지

import React, { useEffect, useRef } from 'react';
import './Start.css';
import Startimg from './img/Startimg.png';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  // 새로고침 시 스크롤 위치 : 맨 위
  // 스크롤 위치 저장 및 복원
  const scrollPosition = useRef({ x: 0, y: 0 });
  const saveScrollPosition = () => {
    scrollPosition.current = { x: 0, y: 0 };
  };
  // 컴포넌트 마운트 시 스크롤 위치 초기화
  useEffect(() => {
    // 스크롤 위치 초기화
    window.scrollTo(0, 0);
    // 컴포넌트 언마운트 시 스크롤 위치 저장
    return () => {
      saveScrollPosition();
    };
  }, []);

  // 버튼 클릭 시 스크롤을 맨 아래로 내려주는 함수
  const goToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // 페이지 이동
  const movePage = useNavigate();
  function gologin() {
    movePage('/login');
  }
  function goregister() {
    movePage('/register');
  }

  return (
    <header>
      {/* 화면 중앙에 위치한 사진 */}
      <div className="Start_Picture">
        <img src={Startimg} alt="Start_Img" className="Start_Img" />
      </div>
      {/* ✱ 모양 */}
      <span className="Start_Snow">&#10033;</span>
      {/* Uni-Buddy 글씨 */}
      <span className="Start_Text1">Uni-Buddy</span>
      {/* 🡣 버튼 */}
      <button onClick={goToBottom} className="Start_Underbutton">
        &#129123;
      </button>
      {/* 유니버디 소개글 */}
      <div className="Start_Text2">
        <h2>
          대학 생활의 완벽한 동반자, 유니버디!
          <br />
          유니버디와 함께 대학 생활을 효율적으로 관리하고
          <br />
          포트폴리오로 만들어 보세요!
        </h2>
      </div>
      {/* 로그인 및 회원가입 버튼 */}
      <footer className="Start_Footer">
        {/* 로그인 버튼 */}
        <button className="Start_Button" onClick={gologin}>
          로그인
        </button>
        {/* 회원가입 버튼 */}
        <button className="Start_Button" onClick={goregister}>
          회원가입
        </button>
      </footer>
    </header>
  );
};

export default Start;
