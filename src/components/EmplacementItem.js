import React from "react";

const EmplacementItem = ({ id, title, cover }) => {
  return (
    <li key={id} className="card">
      <div className="card-content">
        <img src={cover} alt={title} />
        <p>{title}</p>
      </div>
    </li>
  );
};

export default EmplacementItem;
