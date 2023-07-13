// 화면 최상단으로 이동하는 버튼

import { useState } from 'react';
import './Diarylist.css';

function ToTheTop() {
  // 토글 여부를 결정하는 state 선언
  const [toggleBtn] = useState(true);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return toggleBtn ? (
    <button className="List_Button" onClick={goToTop}>
      &#11121;
    </button>
  ) : null;
}

export default ToTheTop;
