// 공유 페이지

import Logo from './img/Logo.png';
import './Share.css';
import React, { useState } from 'react';
import Preveiw from './img/Preview.jpeg';
import { useNavigate } from 'react-router-dom';

const App = () => {
  // 사진 불러오기
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

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
  function goschedule() {
    movePage('/Schedule');
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
        <img src={Logo} alt="Logo" className="Share_Logo" onClick={goshare} />
      </div>
      {/* 메뉴 */}
      <nav className="Share_Menu">
        <button className="Share_Diarylist" onClick={godiarylist}>
          게시판
        </button>
        <button className="Share_Calendar" onClick={gocalendar}>
          캘린더
        </button>
        <button className="Share_Diary" onClick={godiarywrite}>
          일지
        </button>
        <button className="Share_Schedule" onClick={goschedule}>
          시간표
        </button>
        <button className="Share_Mypage" onClick={gomypage}>
          마이페이지
        </button>
        <button className="Share_Logout" onClick={gologout}>
          로그아웃
        </button>
      </nav>
      <section className="Share_Section">
        {/* 왼쪽 내용 - 개인 정보 */}
        <aside className="Share_Leftbox">
          {/* 프로필 사진 */}
          <div>
            {/* 기본 사진*/}
            <img src={Preveiw} alt="Preview" className="Share_Picture" />
            {/* 변경 사진 */}
            {fileImage && (
              <img alt="sample" src={fileImage} className="Share_Img" />
            )}
            {/* 사진 불러오기 버튼 */}
            <div className="Share_File">
              {/* 파일 선택 버튼 */}
              <input
                className="Share_Filechoice"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFileImage}
              />
              {/* X (삭제) 버튼 */}
              <button
                className="Share_Delete"
                onClick={() => deleteFileImage()}
              >
                X
              </button>
            </div>
          </div>
          {/* 개인정보 */}
          <div className="Share_Profile">
            <br />
            이름 <br />
            생년월일 <br />
            e-mail <br />
            한 줄 소개 <br />
          </div>
        </aside>
        {/* 오른쪽 내용 - 일지 목록 */}
        <article className="Share_Rightbox">
          <div>
            {/* 활동1 */}
            <div className="Share_Box">
              {/* 카테고리로 나눈 활동 : 교내활동 / 교외활동 / 자격증 / 어학 */}
              <div className="Share_Title">교내활동</div>
              {/* 해당 카테고리의 내용 : 제목, 기간, 장소 등의 정보 */}
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
            </div>
            {/* 활동2 */}
            <div className="Share_Box">
              {/* 카테고리로 나눈 활동 : 교내활동 / 교외활동 / 자격증 / 어학 */}
              <div className="Share_Title">교외활동</div>
              {/* 해당 카테고리의 내용 : 제목, 기간, 장소 등의 정보 */}
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Share_Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* 공유 버튼 */}
      <footer className="Share_Footer">
        <button className="Share_Button">공유</button>
      </footer>
    </header>
  );
};

export default App;

/* 자격증 및 어학
<div className="Box">
              <div className="Title">자격증</div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
            </div>
            <div className="Box">
              <div className="Title">어학</div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
              <div className="Content">
                unibuddy &nbsp;&nbsp; 23.04.24 - 23.06.23 &nbsp;&nbsp;순천대학교
              </div>
            </div>
*/
