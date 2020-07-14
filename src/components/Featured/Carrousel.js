import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../resources/images/slideOne.jpg'
import image2 from '../../resources/images/slideTwo.jpg'
import image3 from '../../resources/images/slideThree.jpg'
import image4 from '../../resources/images/slideFour.jpg'
import image5 from '../../resources/images/slideThree.jpg'

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay:true
  };
  return (
    <div className="carrousel_wrapper" style={{overflow:"hidden",height:`${window.innerHeight}px`}}>
      <Slider {...settings}>
          <div>
          <div className="carrousel_image"
          style={{
              height:`${window.innerHeight}px`,
              background:`url(${image1})`
          }}
          >
             
          </div>
          </div>
          <div>
          <div className="carrousel_image"
          style={{
              height:`${window.innerHeight}px`,
              background:`url(${image2})`
          }}
          >
             
          </div>
          </div>
          <div>
          <div className="carrousel_image"
          style={{
              height:`${window.innerHeight}px`,
              background:`url(${image3})`
          }}
          >
             
          </div>
          </div>
          <div>
          <div className="carrousel_image"
          style={{
              height:`${window.innerHeight}px`,
              background:`url(${image4})`
          }}
          >
             
          </div>
          </div>
          <div>
          <div className="carrousel_image"
          style={{
              height:`${window.innerHeight}px`,
              background:`url(${image5})`
          }}
          >
             
          </div>
          </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
