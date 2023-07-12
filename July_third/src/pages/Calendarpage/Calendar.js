import './Calendar.css';
import Head from './img/Start.png';
import Logo from './img/Logo.png'
import Icon from './img/Month.png';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
    // 로고 페이지 이동
    const movePage = useNavigate();
    function goshare() {
        movePage('/Share');
    }

    // 메뉴의 페이지 이동
    function godiarylist() {
        movePage('/Diarylist');
    }
    function gocalendar() {
        movePage('/Calendar');
    }
    function godiarywrite() {
        movePage('/Diarywrite');
    }
    function gotime() {
        movePage('/Time');
    }
    function gomypage() {
        movePage('/Mypage');
    }
    function gologout() {
        movePage('/Start');
    }


    return (
        <>
            {/* 배경 및 아이콘 */}
            <header>
                <img src={Head} alt="Head" className="Cal_Head" />
                <div className="Cal_Icon">
                    <img src={Icon} alt="Icon" className="Cal_img" />
                    <p className="Cal_Icontext">일정</p>
                </div>
            </header>
            <nav className="Cal_Nav">
                <img src={Logo} alt="Logo" className="Cal_Logo" onClick={goshare} />
                <section className="Cal_Menu">
                    <button className="Cal_Diarylist" onClick={godiarylist}>
                        게시판
                    </button>
                    <button className="Cal_Calendar" onClick={gocalendar}>
                        일정
                    </button>
                    <button className="Cal_Diary" onClick={godiarywrite}>
                        기록
                    </button>
                    <button className="Cal_Time" onClick={gotime}>
                        시간표
                    </button>
                    <button className="Cal_Mypage" onClick={gomypage}>
                        내정보
                    </button>
                    <button className="Cal_Logout" onClick={gologout}>
                        로그아웃
                    </button>
                </section>
            </nav>
        </>
    );
};

export default Calendar;