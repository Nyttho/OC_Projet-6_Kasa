import React from "react";
import banner from "../assets/images/cliffs.png";

const Banner = () => {
  return (
    <div className="banner">
      <h2>Chez vous, partout et ailleurs</h2>
      <img src={banner} alt="paysage de falaises en bord de mer" />
    </div>
  );
};

export default Banner;
