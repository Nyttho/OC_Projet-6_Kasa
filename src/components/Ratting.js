import React from "react";
import star from "../assets/images/star.png";
import greyStar from "../assets/images/grey-star.png";

const Ratting = ({ rating }) => {
  const maxStars = 5;
  const greyStars = maxStars - rating;

  const rate = [];

  for (let i = 1; i <= rating; i++) {
    rate.push(
      <img
        src={star}
        key={i.toString()}
        alt="notation étoile pleine"
        className="star"
      ></img>
    );
  }
  for (let i = 1; i <= greyStars; i++) {
    rate.push(
      <img
        src={greyStar}
        key={(i + rating).toString()}
        alt="notation étoile vide"
        className="star"
      ></img>
    );
  }

  return <div>{rate}</div>;
};

export default Ratting;
