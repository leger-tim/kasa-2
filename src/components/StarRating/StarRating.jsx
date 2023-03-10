import React from "react";
import starRed from "../../assets/starRed.png";
import starGrey from "../../assets/starGrey.png";
import "./StarRating.css";

function StarRating(props) {
  const stars = [];

  // Boucle pour créer les étoiles
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= props.rating ? starRed : starGrey}
        alt="star"
        className="star"
      />
    );
  }

  return <div>{stars}</div>;
}

export default StarRating;
