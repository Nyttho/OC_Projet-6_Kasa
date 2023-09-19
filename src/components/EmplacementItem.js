import React from "react";
import { Link } from "react-router-dom";

const EmplacementItem = ({ id, title, cover }) => {
  return (
    <Link to={`logement/${id}`}>
      <li key={id} id={id} className="card">
        <div className="card-content">
          <img src={cover} alt={title} />
          <p>{title}</p>
        </div>
      </li>
    </Link>
  );
};

export default EmplacementItem;
