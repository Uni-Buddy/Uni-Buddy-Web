import './Calendar.css';
import Head from './img/Start.png';
import Icon from './img/Month.png';
import Nav from './Nav';
import Top from '../component/Top.js';


const Calendar = () => {
    return (
        <>
            {/* 배경 및 아이콘 */}
            <header>
                <img src={Head} alt="Head" className="Cal_Head" />
                <div className="Cal_Icon">
                    <div className="Cal_Bigcircle">
                        <img src={Icon} alt="Icon" className="Cal_img" />
                    </div>
                    <div className="Cal_Smallcircle"></div>
                    <p className="Cal_Icontext">기록</p>
                </div>
            </header>
            {/* 로고 및 메뉴바 */}
            <Nav />
            {/* 화면 최상단으로 이동하는 버튼 */}
            <footer className="List_Footer">
                <Top />
            </footer>
        </>
    );
};

export default Calendar;