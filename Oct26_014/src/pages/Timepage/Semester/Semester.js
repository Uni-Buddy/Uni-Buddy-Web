import "./Semester.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Styledslider } from "./Styledslide";

const Semester = () => {

    // 슬라이드에 대한 설정값
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <div className="Sem_All">
            {/* 슬라이드 값 */}
            <div className="Sem_Container">
                <Styledslider {...settings}>
                    <div>
                        <h3>1학년 1학기</h3>
                    </div>
                    <div>
                        <h3>1학년 2학기</h3>
                    </div>
                    <div>
                        <h3>2학년 1학기</h3>
                    </div>
                    <div>
                        <h3>2학년 2학기</h3>
                    </div>
                    <div>
                        <h3>3학년 1학기</h3>
                    </div>
                    <div>
                        <h3>3학년 2학기</h3>
                    </div>
                    <div>
                        <h3>4학년 1학기</h3>
                    </div>
                    <div>
                        <h3>4학년 2학기</h3>
                    </div>
                </Styledslider>
            </div>
            <div className="Sem_GPA">
                <div>
                    <text className="Sem_GPAavg">평균 학점</text>
                    <div>
                        <input className="Sem_GPAavginput" />
                        <text className="Sem_GPAavgtext">/4.5</text>
                    </div>
                </div>
                <div>
                    <text className="Sem_GPAget">취득 학점</text>
                    <div>
                        <input className="Sem_GPAgetinput" />
                        <text className="Sem_GPAgettext">/18</text>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Semester;