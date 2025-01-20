import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroSection } from "../../../../@dami-data";
import './index.scss'


// Slider Hero Section

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                background: "white",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <svg width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8264 9.91666L19.4722 19.5833L11.8264 29.25" stroke="#100303" strokeWidth="2" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                background: "white",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <svg width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4828 9.91666L11.837 19.5833L19.4828 29.25" stroke="#100303" strokeWidth="2" />
            </svg>
        </div>
    );
}

const HeroSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
        speed: 1000
    };
    return (
        <div className="slider-wrapper marg-all">
            <Slider {...settings}>
                {
                    heroSection.map((item, index) => {
                        const img = item.img
                        return (
                            <div key={index} className='slider-item' >
                                <img src={img} className="slider-img" onClick={() => { console.log('index', index) }} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default HeroSection;
