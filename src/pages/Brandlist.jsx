import React from 'react';
import Slider from 'react-slick';
import brand1 from '../assets/brands/brand-11.png';
import brand2 from '../assets/brands/brand-12.png';
import brand3 from '../assets/brands/brand-13.png';
import brand4 from '../assets/brands/brand-14.png';
import brand5 from '../assets/brands/brand-15.png';
import brand6 from '../assets/brands/brand-16.png';
import brand7 from '../assets/brands/brand-17.png';
import brand8 from '../assets/brands/brand-18.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brandlist = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplayspeed: 0,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 }
            }
        ]
    };

    const barnds = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

    return (
        <section className='w-full py-8 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-2'>
                <Slider {...settings}>
                    {barnds.map((brand, index) => (
                        <div key={index} className='px-2 flex justify-center items-center'>
                            <img src={brand} alt={`brand-${index}`} className='h-32 object-contain'/>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Brandlist
