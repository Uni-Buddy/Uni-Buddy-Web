// 공유 페이지

import Logo from './img/Logo.png';
import Basic from './img/Basic.png';
import Nav from './Nav.js';
import Top from './Top.js';
import './Share.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  // 로고 클릭 시 새로고침
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }

  return (
    <header>
      {/* 로고 */}
      <div className="Header">
        <img src={Logo} alt="Logo" className="Share_Logo" onClick={goshare} />
      </div>
      {/* 공유 버튼 및 메뉴바 */}
      <Nav />
      <section className="Share_Section">
        {/* 왼쪽 내용 - 개인 정보 */}
        <aside className="Share_Leftbox">
          {/* 프로필 사진 */}
          <div>
            <img className="Share_Img" src={Basic} alt="Basic"></img>
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
            {/*활동 3~4*/}
            <div className="Share_Box">
              <div className="Share_Title">자격증</div>
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
            <div className="Share_Box">
              <div className="Share_Title">어학</div>
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
      {/* 화면 최상단으로 이동하는 버튼 */}
      <footer className="Share_Footer">
        <Top />
      </footer>
    </header>
  );
};

export default App;

/* &#129129;
자격증 및 어학
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
