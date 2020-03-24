import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const slideImages = [
  require("../../../assets/coffeeslide.jpg"),
  require("../../../assets/coffeeslide1.jpg"),
  require("../../../assets/coffeeslide2.jpg"),
  require("../../../assets/a (13).jpeg"),
  require("../../../assets/a (3).jpeg"),
  require("../../../assets/a (16).jpeg")
];

const properties = {
  duration: 2000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,

  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Carouselle = () => {
  const [carState, setstate] = useState({
    carouselPics: [
      require("../../../assets/coffeeslide.jpg"),
      require("../../../assets/coffeeslide1.jpg"),
      require("../../../assets/coffeeslide2.jpg"),
      require("../../../assets/a (13).jpeg"),
      require("../../../assets/a (3).jpeg"),
      require("../../../assets/a (16).jpeg")
    ]
  });
  return (
    <div id="Shop">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img src={carState.carouselPics[0]} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={carState.carouselPics[1]} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={carState.carouselPics[2]} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={carState.carouselPics[3]} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={carState.carouselPics[4]} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={carState.carouselPics[5]} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselle;
