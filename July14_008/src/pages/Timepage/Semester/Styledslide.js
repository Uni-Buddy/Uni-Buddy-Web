import Slider from "react-slick";
import styled from "styled-components";

//슬라이드 화살표 스타일
export const Styledslider = styled(Slider)`
.slick-prev:before,
.slick-next:before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    color: black;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev:before {
    content: "‹";
}

[dir="rtl"] .slick-prev:before {
    content: "›";
}

[dir="rtl"] .slick-next {
    left: -10px;
    top: 70px;
    right: auto;
}

.slick-next:before {
    content: "›";
}

[dir="rtl"] .slick-next:before {
    content: "‹";
}
`;