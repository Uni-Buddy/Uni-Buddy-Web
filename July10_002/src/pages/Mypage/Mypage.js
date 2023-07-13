import './Mypage.css';
import Logo from './img/Logo.png';
import Basic from './img/Basic.png';
import Nav from './Nav/Nav';
import { Link } from 'react-router-dom';

const Mypage = () => {
  return (
    <>
      <section className="Personalinput">
        <div>
          {/* 로고 */}
          <img
            src={Logo}
            alt="Logo"
            className="Logo"
            onClick={() => window.location.reload()}
          />
        </div>

        {/* 사이드바 */}
        <Nav />

        <section>
          {/* 이미지 미리보기 */}
          <img className="Imagepreview" src={Basic} alt="Basic"></img>
        </section>
        <section className="Myinformation">
          {/* 내 정보 */}
          <article>
            <p className="Name">이름</p>
            <p className="Username">아이디</p>
            <p className="Password">비밀번호</p>
            <p className="University">대학교</p>
            <p className="Birthday">생년월일</p>
            <p className="Tel">연락처</p>
          </article>

          <aside>
            {/* 개인정보 수정 버튼 */}
            <Link to="/editPI" style={{ textDecoration: 'none' }}>
              <button className="Edit">개인정보 수정</button>
            </Link>

            {/* 비밀번호 변경 버튼 */}
            <Link to="/changepswd">
              <button className="Change">비밀번호 변경</button>
            </Link>
          </aside>
        </section>
      </section>
    </>
  );
};

export default Mypage;
