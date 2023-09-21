import React from "react";

const Host = ({ firstName, lastName, portrait }) => {
  return (
    <div className="host-description">
      <div className="host-name">
        <p>{firstName}</p>
        <p>{lastName} </p>
      </div>
      <img src={portrait} alt="portrait de l'hote du logement" />
    </div>
  );
};

export default Host;
