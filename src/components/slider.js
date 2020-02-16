import React from 'react'
import SliderSlick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/dodo-slick-dots.scss'

const Slider = () => {
    const settings = {
        dots: true,
        // dotsClass: 'dodo-slick-dots',
        arrows: false,
        swipe: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const images = [
        'images/slides/slide1.jpeg',
        'images/slides/slide2.jpeg',
        'images/slides/slide3.jpeg',
        'images/slides/slide4.jpeg',
        'images/slides/slide5.jpeg',
    ];

    return (
        <SliderSlick {...settings}>
            {
                images.length ?
                images.map(elem => <Slide key={elem} img_src={elem} />) :
                <p>No images!</p>
            }
        </SliderSlick>
    )
};

const Slide = ({img_src}) => {
    return (
        <div>
            <img src={img_src} alt="..." className="w-100 h-75"/>
        </div>
    )
};


export default Slider;
