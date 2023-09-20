import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Slider from "../components/Slider";

const Logement = () => {
  // on récuperere l'url
  const param = useParams();
  const placeId = param.id;
  const place = locations.find((loc) => loc.id === placeId);

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipements,
    tags,
  } = place;

  if (!place) {
    window.location.replace("/error");
  }

  return (
    <div>
      <Slider pictures={pictures} />
      <h3 className="place-title">{title}</h3>
    </div>
  );
};

export default Logement;
