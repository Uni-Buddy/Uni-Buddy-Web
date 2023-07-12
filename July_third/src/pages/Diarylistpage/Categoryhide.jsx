import React from "react";
import './Diarylist.css';

const Categoryhide = () => {
    
    return (
        <>
        <div className="List_Box">
              <button className="List_Category">✓ &nbsp;  교내활동</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">✓ &nbsp;  교외활동</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">✓ &nbsp;  자격증</button>
            </div>
            <div className="List_Box">
              <button className="List_Category">✓ &nbsp;  어학</button>
        </div>
        </>
    );
};

export default Categoryhide;

/* 클래스 이름 각각 부여               ✔
        <div className="List_Box">
            <button
              className="List_Category"
              onClick={() => {
                setVisible(!visible);
              }}
            >
            ● &nbsp; 교내활동
            
            </button>
            </div>
            <div className="List_Box">
            <button
              className="List_Category"
              onClick={() => {
                setVisible(!visible);
              }}
            >
            ● &nbsp; 교외활동
            </button>
            </div>
            <div className="List_Box">
            <button
              className="List_Category"
              onClick={() => {
                setVisible(!visible);
              }}
            >
            ● &nbsp; 자격증
            </button>
            </div>
            <div className="List_Box">
            <button
              className="List_Category"
              onClick={() => {
                setVisible(!visible);
              }}
            >
            ● &nbsp; 어학
            </button>
        </div>
*/