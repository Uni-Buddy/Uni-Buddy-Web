// 시간표 페이지 

import Timetable from './Timetable/Timetable';
import Semester from './Semester/Semester';
import Nav from './Nav/Nav';
import Logo from './img/Logo.png';
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
      {/* 로고 */}
      <div className="Header">
        <img src={Logo} alt="Logo" className="Share_Logo" onClick={goshare} />
      </div>

      <Nav />
      <div className='all'>
        <Semester />
        <Timetable />
      </div></>
  );
}

export default Timetablepage;