import "./Semester.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Styledslider } from "./Styledslide";

const Semester = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <div className="left">
            <div className="container">
                <Styledslider {...settings}>

                    <div>
                        <h3 className="onebyone">1학년 1학기</h3>
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
            <div className="GPA">
                <input className="GPAtext" placeholder="학점입력"></input>
                <button className="GPAsave">저장</button>
            </div>
        </div>
    );
};

export default Semester;