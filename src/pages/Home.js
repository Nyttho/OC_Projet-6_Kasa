import React from "react";
import EmplacementList from "../components/EmplacementList";
import banner from "../assets/images/cliffs.png";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="paysage de falaises en bord de mer" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <EmplacementList />
    </div>
  );
};

export default Home;
