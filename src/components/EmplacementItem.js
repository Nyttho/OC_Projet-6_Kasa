import React from "react";

const EmplacementItem = ({ id, title, cover }) => {
  return (
    <li key={id} className="emplacement-item">
      <img src={cover} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default EmplacementItem;
