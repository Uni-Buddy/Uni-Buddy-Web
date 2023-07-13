// 일지 목록 페이지

import Head from './img/Start.png';
import Logo from './img/Logo.png';
import Icon from './img/Logo.png';
import Categoryhide from './Categoryhide';
import Listhide from './Listhide';
import { useState } from 'react';
import './Diarylist.css';
//import Button from './Button';

import { useNavigate } from 'react-router-dom';

const Diarylist = () => {
  // 카테고리 버튼 클릭에 따른 내용 표시 및 숨기기
  const [visible, setVisible] = useState(false);

  // 메뉴의 페이지 이동
  const movePage = useNavigate();
  function goshare() {
    movePage('/Share');
  }
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
    <header>
      {/* 배경 및 아이콘 */}
      <header>
        <img src={Head} alt="Head" className="Write_Head" />
        <div className="Write_Icon">
          <img src={Icon} alt="Icon" className="Write_Writeimg" />
          <p className="Write_Iconwrite">리스트</p>
        </div>
      </header>
      {/* 메뉴 */}
      <nav className="Write_Nav">
        <img src={Logo} alt="Logo" className="Write_Logo" onClick={goshare} />
        <section className="Write_Menu">
          <button className="List_Diarylist" onClick={godiarylist}>
            게시판
          </button>
          <button className="List_Calendar" onClick={gocalendar}>
            일정
          </button>
          <button className="List_Diary" onClick={godiarywrite}>
            기록
          </button>
          <button className="List_Time" onClick={gotime}>
            시간표
          </button>
          <button className="List_Mypage" onClick={gomypage}>
            내정보
          </button>
          <button className="List_Logout" onClick={gologout}>
            로그아웃
          </button>
        </section>
      </nav>
      <section className="List_section">
        {/* 카테고리 및 카테고리 리스트 - 왼쪽 내용 
            카테고리 리스트 : 교내활동, 교외활동, 자격증, 어학 */}
        <aside className="List_Leftbox">
          {/* 카테고리 옆 삼각형 기호 변화 */}
          <button
            className="List_Category"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '카테고리  ▼' : '카테고리  ▶'}
          </button>
          <hr />
          {visible && <Categoryhide />}
        </aside>
        {/* 카테고리 버튼 클릭에 따른 내용 표시 및 숨기기
            내용 : 카테고리 리스트 및 일지 리스트 
            일지 리스트 : 일지 제목, 일지 내용, 기간 등 일지 정보가 담긴 리스트 */}
        <article className="List_Rightbox">{visible && <Listhide />}</article>
      </section>
    </header>
  );
};

export default Diarylist;

/* hide 사용 전
<aside className="List_Leftbox">
          <div className="List_Box">
            <button className="List_Category">카테고리 &#9654;</button>
            <div className="List_Box">
              <button className="List_Category">- 교내활동</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">- 교외활동</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">- 자격증</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">- 어학</button>
            </div>
          </div>
        </aside>
        <article className="List_Rightbox">
          <div>
            <div className="List_List">일지 1</div>
            <br />
            <div className="List_List">일지 2</div>
            <br />
            <div className="List_List">일지 3</div>
            <br />
            <div className="List_List">일지 4</div>
          </div>
        </article>
*/

/* 버튼.js 사용
<article className="Rightbox">
          <div>
            <Button />
            <div className="List">일지</div>
          </div>
        </article>
*/

/* 방 추가 삭제 코드
import { useState } from 'react';

const Test = () => {
  const [form, setForm] = useState({
    count: 1,
    room1: '',
  });

  const addRoom = () => {
    const number = form.count + 1;

    setForm({
      ...form,
      count: number,
      [`room${number}`]: '',
    });
  };

  const deleteRoom = (i) => {
    const newForm = { ...form };

    for (let n = i; n <= newForm.count; n++) {
      if (n === i) {
        delete newForm[`room${n}`];
      } else {
        Object.defineProperty(
          newForm,
          'room' + (n - 1),
          Object.getOwnPropertyDescriptor(newForm, 'room' + n),
        );
        delete newForm[`room${n}`];
      }
    }

    setForm({ ...newForm, count: form.count - 1 });
  };

  return (
    <>
      {form.count > 0 &&
        [...Array(form.count)].map((item, i) => {
          return (
            <div key={i + 1}>
              방 {i + 1}
              <input
                type="text"
                placeholder={i + 1}
                value={form[`room${i + 1}`]}
                name={`room${i + 1}`}
                onChange={(e) => {
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
              />
              <button
                onClick={() => {
                  deleteRoom(i + 1);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      <div onClick={addRoom}>
        <p>+ 방 추가</p>
      </div>
    </>
  );
};

export default Test;
*/
