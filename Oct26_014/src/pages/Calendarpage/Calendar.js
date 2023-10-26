import './Calendar.css';
import Head from './img/Start.png';
import Icon from './img/Month.png';
import Nav from './Nav';
import Top from '../component/Top.js';

import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

// 모달 스타일 설정
const customStyles = {
    content: {
        width: '300px',
        margin: 'auto',
        padding: '20px',
    },
};

Modal.setAppElement('#root');

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const eventInputRef = useRef(null); // 일정 입력을 위한 ref

    const openModal = () => {
        setModalIsOpen(true);
        setSelectedDate(new Date()); // 모달 열 때 현재 날짜로 초기화
    };

    const closeModal = () => {
        setModalIsOpen(false);
        eventInputRef.current.value = ''; // 모달 닫을 때 입력 내용 초기화
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        openModal();
    };

    const addEvent = (eventText) => {
        const newEvent = {
            date: selectedDate,
            text: eventText,
        };
        setEvents([...events, newEvent]);
        closeModal();
    };

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

            <div>
                <h1>일정 관리 캘린더</h1>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => handleDateChange(date)}
                    dateFormat="yyyy-MM-dd"
                    inline
                />

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2>일정 추가</h2>
                    <input
                        type="text"
                        placeholder="일정을 입력하세요"
                        ref={eventInputRef}
                    />
                    <button onClick={closeModal}>취소</button>
                    <button onClick={() => addEvent(eventInputRef.current.value)}>추가</button>
                </Modal>

                <h2>일정 목록</h2>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            {event.date.toDateString()}: {event.text}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

export default Calendar;