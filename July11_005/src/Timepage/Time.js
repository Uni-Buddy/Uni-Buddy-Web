// 시간표 페이지

import Timetable from './Timetable/Timetable';
import Semester from './Semester/Semester';
import Nav from './Nav/Nav';
import Head from './img/Start.png';
import Icon from './img/Month.png';
import './All.css';
import { useNavigate } from 'react-router-dom';

function Timetablepage() {
  // 로고 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }

  return (
    <>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Time_Head" />
        <div className="Time_Icon">
          <img src={Icon} alt="Icon" className="Time_Month" onClick={goshare} />
        </div>
      </header>

      <Nav />
      <div className="all">
        <Semester />
        <Timetable />
      </div>
    </>
  );
}

export default Timetablepage;
