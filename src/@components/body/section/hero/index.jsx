import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss'
import { heroSection } from "../../../data/data-product";
import { useRef } from "react";


// Slider Otomatis Hero Section



const HeroSection = () => {
    let sliderRef = useRef(null);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
    };

    return (
        <div className="container-hero">
            <div className="slider-wrapper marg-all" >
                <Slider ref={sliderRef} {...settings}>
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
