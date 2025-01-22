import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { heroSection } from "../../../../@dami-data";
import './index.scss'


// Slider Otomatis Hero Section


const HeroSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper marg-all" >
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
        </div>
    );
}

export default HeroSection;
