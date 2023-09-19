import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";

const Logement = () => {
  // on récuperere l'url
  const param = useParams();
  const locationId = param.id;

  const carrousselImg = [];

  return (
    <div>
      <h2>Logement numéro {locationId} </h2>
    </div>
  );
};

export default Logement;
