// 마이페이지

import './Mypage.css';
import Logo from './img/Logo.png';
import Basic from './img/Basic.png';
import Nav from './Nav/Nav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {

  // 로고 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }

  return (
    <>
      <section >

        {/* 로고 */}
        <div className="Header">
          <img src={Logo} alt="Logo" className="Share_Logo" onClick={goshare} />
        </div>

        {/* 사이드바 */}
        <Nav />

        <section>
          {/* 이미지 미리보기 */}
          <img className="Imagepreview" src={Basic} alt='Basic'></img>
        </section>
        <section className='Myinformation'>
          {/* 내 정보 */}
          <article>
            <p className="Name">이름</p>
            <p className="Username">아이디</p>
            <p className="Password">비밀번호</p>
            <p className="University">대학교</p>
            <p className="Birthday">생년월일</p>
            <p className="Tel">연락처</p>
          </article>

          <aside className="My_Aside">
            {/* 개인정보 수정 버튼 */}
            <Link to="/editPI" style={{ textDecoration: "none" }}>
              <button className='My_Button'>개인정보 수정</button>
            </Link>

            {/* 비밀번호 변경 버튼 */}
            <Link to="/changepswd">
              <button className='My_Button'>비밀번호 변경</button>
            </Link>
          </aside>
        </section>
      </section>


    </>
  )

}

export default Mypage;