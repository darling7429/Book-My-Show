import React from "react";
import Slider from "react-slick";


//component
import { NextArrow, PrevArrow } from "../HeroCarousal/Arrows.components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlaysCarousal = ({images,setImages}) => {

   
    const settingsLG = {
        arrows: true,
        autoplay:true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

        return <>
        <div className="lg:hidden">
        <Slider {...settings}>
            {images.map((image) =>(
                  <div className="w-full h-56 md:h-80 py-3">
                      <img  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                        alt="testing" className="w-full h-full " />
                  </div> 
            ))}

        </Slider>
        </div>
        <div className="hidden lg:block">
        <Slider {...settingsLG}>
            {images.map((image) =>(
                  <div className="w-full h-96 px-2 py-3">
                      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                        alt="testing" className="w-full h-full rounded-md" />
                  </div> 
            ))}

        </Slider>
        </div>
    </>
};

export default  PlaysCarousal;
