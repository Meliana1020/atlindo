import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss'
import { heroSection } from "../../../data/data-product";
import { useEffect, useRef, useState } from "react";


const HeroSection = () => {
    const sliderRef = useRef(null);
    const [getWitdh, setGetWitdh] = useState({
        width: undefined
    })


    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
    };

    useEffect(() => {

        function handleResize() {
            const witdh = document.documentElement.clientWidth
            setGetWitdh(witdh)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.addEventListener('resize', handleResize)
    }, [])


    return (
        <div className="container-hero">
            <div className="slider-wrapper marg-all" >
                <Slider ref={sliderRef} {...settings}>
                    {
                        getWitdh > 700 ?
                            heroSection.map((item, index) => {
                                const img = item.img
                                return (
                                    <div key={index} className='slider-item' >
                                        <img src={img} className="slider-img" onClick={() => { console.log('index', index) }} />
                                    </div>
                                )
                            })
                            :
                            heroSection.map((item, index) => {
                                const img = item.imgMobile
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
