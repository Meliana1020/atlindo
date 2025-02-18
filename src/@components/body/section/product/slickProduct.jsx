import Slider from "react-slick";
import { product } from "../../../data/dami-data";
import { useRef, useEffect, useState } from "react";

export const SlickProduct = ({ getNameProduct }) => {
    const sliderRef = useRef(null);
    const [getWitdh, setGetWitdh] = useState(window.innerWidth); // Simpan angka langsung

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
            sliderRef.current.slickGoTo(0);
        }

        const handleResize = () => {
            setGetWitdh(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [getNameProduct]);

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {product
                    .filter(item => item?.nameProduct === getNameProduct)
                    .flatMap(item =>
                        (getWitdh > 700 ? item?.img : item?.imgMobile).map((imgSrc, index) => (
                            <div key={index} className="img-container">
                                <img src={imgSrc} alt="product-img" />
                            </div>
                        ))
                    )
                }
            </Slider>
        </div>
    );
};
