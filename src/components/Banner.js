import React from "react";
import banner from "../assets/images/cliffs.png";

const Banner = () => {
  return (
    <div>
      <img src={banner} alt="paysage de falaises en bord de mer" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
