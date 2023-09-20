import React from "react";
import { useState } from "react";

import nextArrow from "../assets/images/arrow-forward.png";
import prevArrow from "../assets/images/arrow-backward.png";

const Slider = ({ pictures }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const picLength = pictures.length;

  const nextImg = () => {
    setCurrentImg(currentImg === picLength - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? picLength - 1 : currentImg - 1);
  };

  return (
    <div>
      <div className="carousel-container">
        {picLength > 1 && (
          <div className="arrow next">
            <img src={nextArrow} alt="image suivante" onClick={nextImg} />
          </div>
        )}
        {picLength > 1 && (
          <div className="arrow prev">
            <img src={prevArrow} alt="image suivante" onClick={prevImg} />
          </div>
        )}
        <div className="carousel-img">
          <img src={pictures[currentImg]} alt="" />
        </div>
        {picLength > 1 && (
          <div className="paging">
            {currentImg + 1}/{picLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
