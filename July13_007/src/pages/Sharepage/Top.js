import { useState } from 'react';
import './Share.css';

function ToTheTop() {
  // 토글 여부를 결정하는 state 선언
  const [toggleBtn] = useState(true);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return toggleBtn ? (
    <button className="Share_Button" onClick={goToTop}>
      &#11121;
    </button>
  ) : null;
}

export default ToTheTop;
