// src/components/Card.js
import React from "react";

const Card = ({ character, onClick, flipped }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <img
        src={flipped ? character.image : "path_to_backside_image"}
        alt={character.name}
      />
    </div>
  );
};

export default Card;
