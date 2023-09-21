import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Ratting from "../components/Ratting";
import Collapsible from "../components/Collapsible";

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
    equipments,
    tags,
  } = place;

  const hostName = host.name.split(" ");
  const firstName = hostName[0];
  const lastName = hostName[1];
  const portrait = host.picture;

  if (!place) {
    window.location.replace("/error");
  }

  return (
    <div>
      <Slider pictures={pictures} />
      <div className="info-container">
        <div className="place-info">
          <h3 className="place-title">{title}</h3>
          <h4 className="place-location">{location}</h4>
          <div className="tags-container">
            <Tags tags={tags} />
          </div>
        </div>
        <div className="place-host">
          <Host firstName={firstName} lastName={lastName} portrait={portrait} />
          <Ratting rating={rating} />
        </div>
      </div>
      <div className="description-equipment">
        <Collapsible label="Description">
          <p>{description}</p>
        </Collapsible>
        <Collapsible label="Équipements">
          <ul>
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default Logement;
