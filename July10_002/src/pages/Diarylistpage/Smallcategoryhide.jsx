import React from "react";
import './Diarylist.css';
import Listhide from './Listhide';
import { useState } from 'react';

const Categoryhide = () => {
  const [visible, setVisible] = useState(false);
    return (
        <>
        <div className="List_Box">
        <button
            className="List_In"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '●  교내활동' : '●  교내활동'}
          </button>
          <button
            className="List_In"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '●  교외활동' : '●  교외활동'}
          </button>
          <button
            className="List_In"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '●  자격증' : '●  자격증'}
          </button>
          <button
            className="List_In"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '●  어학' : '●  어학'}
          </button>
          <hr />
          {visible && <Listhide />}
            
        </div>
        </>
    );
};

export default Categoryhide;
