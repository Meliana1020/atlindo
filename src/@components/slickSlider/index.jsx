import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroSection } from "../../@damiData";
import './index.scss'


// Slider Hero Section

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", border: '1px solid red' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export const SliderHeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true
    };
    return (
        <div className="slider-wrapper">
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

export default SliderHeroSection;
