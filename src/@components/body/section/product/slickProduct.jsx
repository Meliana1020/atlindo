import Slider from "react-slick";
import { product } from "../../../data/data-product";
import { useRef, useEffect } from "react";


export const SlickProduct = ({ getNameProduct }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Balik ke dot awal
        }
    }, [getNameProduct]);
    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {product
                    .filter(item => item?.nameProduct === getNameProduct)
                    .flatMap(item => item?.img.map((imgSrc, index) => (
                        <div key={index} className="img-container">
                            <img src={imgSrc} />
                        </div>
                    )))
                }
            </Slider>
        </div>
    );
}

