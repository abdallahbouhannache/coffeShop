import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  require("../../../assets/coffeeslide.jpg"),
  require("../../../assets/coffeeslide1.jpg"),
  require("../../../assets/coffeeslide2.jpg")
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,

  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Carousel = () => {
  return (
    <Slide {...properties} className="slide-container">
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
      </div>
    </Slide>
  );
};

export default Carousel;
