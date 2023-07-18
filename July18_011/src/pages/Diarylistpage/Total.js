// Total

import In from './HideIn';
import Out from './HideOut';
import Certificate from './HideCertificate';
import Language from './HideLanguage';
import { useState } from 'react';

const Total = () => {
  // 카테고리 버튼 클릭에 따른 내용 표시 및 숨기기
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      {/* 카테고리 : 전체 */}
      <article className="Article2">
        <span
          onClick={handleClick}
          className={`Category`}
          style={{
            color: visible ? '#244F9E' : 'black',
            fontWeight: visible ? 'bold' : 'normal',
          }}
        >
          {visible ? '전체' : '전체'}
        </span>
        <article className="Box">{visible && <In />}</article>
        <article className="Box">{visible && <Out />}</article>
        <article className="Box">{visible && <Certificate />}</article>
        <article className="Box">{visible && <Language />}</article>
      </article>
    </>
  );
};

export default Total;
