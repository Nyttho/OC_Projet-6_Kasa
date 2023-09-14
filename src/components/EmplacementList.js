import React from "react";
import locations from "../data/locations.json";
import EmplacementItem from "./EmplacementItem";

const EmplacementList = () => {
  return (
    <div>
      <ul className="emplacement-list">
        {locations.map(({ id, title, cover }) => (
          <EmplacementItem key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  );
};

export default EmplacementList;
