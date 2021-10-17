import React from 'react';
import Slider from 'react-slick';
//poster component
import Poster from '../Poster/Poster.component';

//configs
//config
import PosterCarousalSettings from "../../config/PosterCarousal.config";


export const PosterSlider = (props) => {
    //we reconstruct the settings for carousel.
    const sliderConfig = props.config ? props.config : PosterCarousalSettings
    return (
        <>
            <div className="flex flex-col items-start my-2">
                <h3 className={` text-2xl font-bold ${props.isDark ? "text-white": "text-gray-800"}`}>{props.title}</h3>
                <p className={` text-sm ${props.isDark ? "text-white": "text-gray-800"}`}>{props.subtitle}</p>
            </div>
          <Slider {...sliderConfig }>
             {props.images.map((image) => (
               <Poster{...image} isDark={props.isDark}/>
             ))} 
            </Slider>  
            
        </>
    )
}

 export default PosterSlider;