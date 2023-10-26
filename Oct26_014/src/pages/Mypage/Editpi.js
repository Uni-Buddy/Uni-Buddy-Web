// 개인정보 수정 페이지

import './Editpi.css';
import Head from './img/Start.png';
import Icon from './img/My.png';
import Nav from './Nav';
import Top from '../component/Top';
import { useState } from 'react';
import React from "react";



const Editpi = () => {

  /*--------------------------------------------------------*/
  // 프로필 사진

  let [mainImg, setMainImg] = useState("https://ifh.cc/g/pKharG.png");
  const setPreviewImg = (event) => {
    // 이미지 미리보기를 위한 FileReader API 사용
    var reader = new FileReader();
    reader.onload = function (event) {
      setMainImg(event.target.result);
    };
    // readAsDataURL : 파일을 URL로 만들어 파일 정보를 주소처럼 사용
    reader.readAsDataURL(event.target.files[0]);
  }

  /*---------------------------------------------------------*/
  //대학 상태 체크박스

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    // 선택된 체크박스만 true로 설정하고 나머지는 false로 초기화
    const updatedCheckboxes = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      [name]: checked,
    };

    setCheckboxes(updatedCheckboxes);
  };

  /*----------------------------------------------------------*/
  // 정보추가관련

  // 제목과 내용, 추가 항목을 저장하기 위한 상태 변수 선언
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tasks, setTasks] = useState([]);

  // 제목 입력란의 변경을 처리하는 핸들러 함수
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 입력란의 변경을 처리하는 핸들러 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 확인 버튼 클릭 시 호출되는 함수
  const handleAddTask = (e) => {
    e.preventDefault();

    // 제목과 내용이 모두 비어 있지 않을 때만 추가 항목 추가
    if (title.trim() !== '' && content.trim() !== '') {
      const newTask = {
        title: title,
        content: content,
      };

      // 기존 항목 배열에 새 항목 추가
      setTasks([...tasks, newTask]);
      // 입력란 초기화
      setTitle('');
      setContent('');
    }
  };

  // 항목 삭제 버튼 클릭 시 호출되는 함수
  const handleDeleteTask = (index) => {
    // 새로운 배열 생성하여 선택된 항목 삭제
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (

    <>
      <section>
        {/* 배경 및 아이콘 */}
        <header>
          <img src={Head} alt="Head" className="Edit_Head" />
          <div className="Edit_Icon">
            <div className="Edit_Bigcircle">
              <img src={Icon} alt="Icon" className="Edit_img" />
            </div>
            <div className="Edit_Smallcircle"></div>
            <p className="Edit_Iconwrite">개인 정보 수정</p>
          </div>
        </header>

        {/* 사이드바 */}
        <Nav />

        <div className='Edit_Section1'>
          <form>
            {/* 이미지 미리보기 */}
            <img className="Edit_Imagepreview" alt="메인사진" src={mainImg} />
            <br />
            {/* 이미지 업로드 
       accept 속성: 서버로 업로드 할 수 있는 파일의 타입 명시 ('image/*'은 모든 타입의 이미지 파일이 허용)*/}
            <input
              className="Edit_Filechoose"
              type="file"
              id="image"
              accept="image/*"
              style={{ border: "solid 1px lightgray", borderRadius: "5px" }}
              onChange={setPreviewImg}
            />
          </form>
        </div>


        {/* 내 정보 수정 */}
        <section className='Edit_Section2'>
          <form>
            {/* 이름 input */}
            <input
              className='Edit_name_input'
              id="name"
              type="text"
              placeholder="이름"
            />


            {/* 이메일(ID) input */}
            <input
              className='Edit_email_input'
              id="ID"
              type="text"
              placeholder="이메일"
            />

            {/* 대학교 input */}
            <div>
              <input
                className='Edit_univ_input'
                id="university"
                type="text"
                placeholder="대학교"
              />

              {/* 대학 상태 선택 */}
              <label>
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
                재학
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
                휴학
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                />
                졸업
              </label>
            </div>

            {/* 휴대폰 번호 input */}
            <label htmlFor='tel1' className='Edit_tel_label'>휴대폰 번호</label>
            <div>
              <input
                className='Edit_tel1_input'
                id="tel1"
                type="tel"
                placeholder="010"
              />
              -
              <input
                className='Edit_tel2_input'
                id="tel2"
                type="tel"
              />
              -
              <input
                className='Edit_tel3_input'
                id="tel3"
                type="tel"
              />
            </div>

            {/* 생년월일 선택 */}
            <label htmlFor='date' className='Edit_date_label'>생년월일</label>
            <br />
            <input
              className='Edit_date_input'
              id='date'
              type='date'
              placeholder='생년월일'
            />
          </form>

          {/* 정보 추가 */}
          <div>
            <h1 className='Edit_plus_h1'>추가항목</h1>
            <ul>
              {tasks.map((task, index) => (
                <div
                  className='Edit_plus_list'
                  key={index}>
                  <span>{task.title}</span>
                  <span style={{ marginLeft: '20px' }}>{task.content}</span>
                  <button
                    className='Edit_plus_cancle_button'
                    onClick={() => handleDeleteTask(index)}>x</button>
                </div>
              ))}
            </ul>
            <form onSubmit={handleAddTask}>
              <input
                className='Edit_plus_title_input'
                type="text"
                placeholder="제목"
                value={title}
                onChange={handleTitleChange}
              />
              <input
                className='Edit_plus_content_input'
                type="text"
                placeholder="내용"
                value={content}
                onChange={handleContentChange}
              />
              <button
                className='Edit_plus_check_button'
                type="submit">✔</button>
            </form>

          </div>


          {/* 저장, 취소 버튼 */}
          <aside className='Edit_Aside'>
            <button className='Edit_Button' type='submit'>확인</button>
            <button className='Edit_Button'>취소</button>
          </aside>
        </section>


        {/* 화면 최상단으로 이동하는 버튼 */}
        <footer className="List_Footer">
          <Top />
        </footer>
      </section>

    </>
  );
};

export default Editpi;