import React from "react";
import Slider from "react-slick";
import "./Slider.css";

const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const images = [
        { src: "/img/Rectangle 5.png", caption: "مسیر صعود آسان به دماوند" },
        { src: "/img/Rectangle 6.png", caption: "آبشاری اسرار آمیز در دل کویر" },
        { src: "/img/Rectangle 7.png", caption: "سبزی بی پایان در جنگل های غرب" },
        { src: "/img/Rectangle 8.png", caption: "سواحل پارسیان، نگین دریای جنوب" },
    ];

    // دکمه‌های ناوبری
    const nextArrow = <button className="slick-next">Next</button>;
    const prevArrow = <button className="slick-prev">Prev</button>;

    return (
        <div className="containerr">
            <div className="overlayFooter"></div>

            <div className="slider-container">
                <Slider {...settings} nextArrow={nextArrow} prevArrow={prevArrow}>
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image.src} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '10px' }} />
                            <div className="caption">{image.caption}</div>
                        </div>
                    ))}
                </Slider>

            </div>
            <div className="containBtnCarsoul">
                <button className="searchBtn foodBtn">ورود به صفحه جشن‌ها و رویدادها </button>
            </div>
            <div className="footer">
                <div className="col">
                    <ul>
                        <li>درباره توربین</li>
                        <li>مجله گردشگری</li>
                        <li>مسیریاب توربین</li>
                        <li>سفرساز توربین</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>جاذبه های گردشگری</li>
                        <li>غذاها و سوغات</li>
                        <li>جشن‌ها و رویدادها</li>
                        <li>تورهای گردشگری</li>
                    </ul>
                </div>
                <div className="col imageCol">
                    <img className="imageFooter" src="/img/Default_A_beaming_tourist_man_in_his_mid30s_with_a_bright_and_1.png"/>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
