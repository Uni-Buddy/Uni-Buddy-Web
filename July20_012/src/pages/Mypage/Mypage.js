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

        <section className='My_Section1'>
          {/* 이미지 미리보기 */}
          <img className="My_Imagepreview" src={Basic} alt="Basic"></img>

          <section className="My_Section2">
            {/* 내 정보 */}
            <article>
              <p className="My_Name">김순대</p>
              <div className='My_U'>
                <p className='My_University1'>소속</p>
                <p className="My_University2">순천대학교 컴퓨터공학과</p>
              </div>
              <div className='My_UN'>
                <p className="My_Username1">이메일</p>
                <p className="My_Username2">kimsundae@s.scnu.ac.kr</p>
              </div>
              <div className='My_T'>
                <p className="My_Tel1">휴대전화</p>
                <p className="My_Tel2">010-1234-5678</p>
              </div>
              <div className='My_B'>
                <p className="My_Birthday1">생년월일</p>
                <p className="My_Birthday2">2001.01.01</p>
              </div>

            </article>


          </section>
        </section>

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

        {/* 화면 최상단으로 이동하는 버튼 */}
        <footer className="List_Footer">
          <Top />
        </footer>
      </section>

    </>
  );
};

export default Mypage;
