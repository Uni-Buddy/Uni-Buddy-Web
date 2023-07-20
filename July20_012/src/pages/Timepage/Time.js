// 시간표 페이지

import Timetable from './Timetable/Timetable';
import Semester from './Semester/Semester';
import Nav from './Nav';
import Head from './img/Start.png';
import Icon from './img/Month.png';
import './Time.css';
import Top from '../component/Top';

function Timetablepage() {


  return (
    <>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Time_Head" />
        <div className="Time_Icon">
          <div className="Time_Bigcircle">
            <img src={Icon} alt="Icon" className="Time_img" />
          </div>
          <div className="Time_Smallcircle"></div>
          <p className="Time_Icontext">시간표</p>
        </div>
      </header>

      <Nav />
      <div className="all">
        <Semester />
        <Timetable />
      </div>

      {/* 화면 최상단으로 이동하는 버튼 */}
      <footer className="List_Footer">
        <Top />
      </footer>
    </>
  );
}

export default Timetablepage;
