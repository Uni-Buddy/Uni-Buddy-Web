// 공유 페이지

import Logo from './img/Logo.png';
import './Share.css';
import React, { useState } from 'react';
import Preveiw from './img/Preview.jpeg';

const App = () => {
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  return (
    <header>
      <div className="Header">
        <img
          src={Logo}
          alt="Logo"
          className="Logo"
          onClick={() => window.location.reload()}
        />
      </div>
      <nav className="Menu">
        <p className="List">게시판</p>&nbsp;
        <p className="Calendar">캘린더</p>&nbsp;
        <p className="Diary">일지</p>&nbsp;
        <p className="Schedule">시간표</p>&nbsp;
        <p className="Mypage">마이페이지</p>&nbsp;
        <p className="Logout">로그아웃</p>
      </nav>
      <section className="Share_Section">
        <aside className="Share_Leftbox">
          <div>
            <img src={Preveiw} alt="Preview" className="Share_Picture" />

            {fileImage && (
              <img alt="sample" src={fileImage} className="Share_Img" />
            )}
            <div className="Share_File">
              <input
                className="Share_Filechoice"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFileImage}
              />
              <button
                className="Share_Delete"
                onClick={() => deleteFileImage()}
              >
                X
              </button>
            </div>
          </div>

          <div className="Share_Profile">
            <br />
            이름 <br />
            생년월일 <br />
            e-mail <br />
            한 줄 소개 <br />
          </div>
        </aside>
        <article className="Share_Rightbox">
          <div>
            <div className="Share_Box">
              <div className="Share_Title">교내활동</div>
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
              <div className="Share_Title">교외활동</div>
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
