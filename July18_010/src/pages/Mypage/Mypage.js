// 마이페이지

import './Mypage.css';
import Head from './img/Start.png';
import Icon from './img/My.png';
import Basic from './img/Basic.png';
import Nav from './Nav';
import Top from '../component/Top';

import { Link } from 'react-router-dom';

const Mypage = () => {
  return (
    <>
      <section>
        {/* 배경 및 아이콘 */}
        <header>
          <img src={Head} alt="Head" className="My_Head" />
          <div className="My_Icon">
            <div className="My_Bigcircle">
              <img src={Icon} alt="Icon" className="My_img" />
            </div>
            <div className="My_Smallcircle"></div>
            <p className="My_Iconwrite">내 정보</p>
          </div>
        </header>

        {/* 사이드바 */}
        <Nav />

        <section>
          {/* 이미지 미리보기 */}
          <img className="My_Imagepreview" src={Basic} alt="Basic"></img>
        </section>

        <section className="My_Section">
          {/* 내 정보 */}
          <article>
            <p className="My_Name">이름</p><br />
            <p className="My_Username">아이디</p><br />
            <p className="My_Password">비밀번호</p><br />
            <p className="My_University">대학교</p><br />
            <p className="My_Birthday">생년월일</p><br />
            <p className="My_Tel">연락처</p>
          </article>

          <aside className="My_Aside">
            {/* 개인정보 수정 버튼 */}
            <Link to="/editPI" style={{ textDecoration: 'none' }}>
              <button className="My_Button">개인정보 수정</button>
            </Link>

            {/* 비밀번호 변경 버튼 */}
            <Link to="/changepswd">
              <button className="My_Button">비밀번호 변경</button>
            </Link>
          </aside>
        </section>

        {/* 화면 최상단으로 이동하는 버튼 */}
        <footer className="List_Footer">
          <Top />
        </footer>
      </section>
    </>
  );
};

export default Mypage;
