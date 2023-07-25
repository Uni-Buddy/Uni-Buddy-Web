import React, { useRef} from 'react';
import html2pdf from 'html2pdf.js';
import Logo from './img/Logo.png';
import Basic from './img/Basic.png';
import Top from '../component/Top.js';
import './Share.css';
import Nav from './Nav.jsx';

const Share = () => {
    const sectionRef = useRef();
  
    const savePdf = () => {
  const content = sectionRef.current;
  const options = {
    margin: { top: 10, bottom: 10 }, // 상단과 하단에만 margin 적용
    filename: 'my_profile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scaleFontSize: true,
      logging: true,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(content).set(options).save();
};
  
    return (
      <header>
        <div className="Header">
          {/* 로고 */}
          <img
            src={Logo}
            alt="Logo"
            className="Share_Logo"
            onClick={() => window.location.reload()}
          />
        </div>
        {/* 공유 버튼 및 메뉴바 */}
        <Nav handleSavePdf={savePdf} />
        <section className="Share_Section0">
        <section className="Share_Section" ref={sectionRef}>
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
                {/* 카테고리 : 전체 / 교내활동 / 교외활동 / 자격증 / 어학 */}
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
        </section>
        
        {/* 화면 최상단으로 이동하는 버튼 */}
        <footer className="Footer">
          <Top />
        </footer>
      </header>
    );
  };
  
  export default Share;