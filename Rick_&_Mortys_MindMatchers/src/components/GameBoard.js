// src/components/GameBoard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const GameBoard = () => {
  const [characters, setCharacters] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const characters = response.data.results.slice(0, 10); // Get the first 10 characters
        setCharacters([...characters, ...characters]); // Duplicate characters for pairs
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCardClick = (index) => {
    setFlippedCards([...flippedCards, index]);
  };

  return (
    <div className="game-board">
      {characters.map((character, index) => (
        <Card
          key={index}
          character={character}
          onClick={() => handleCardClick(index)}
          flipped={flippedCards.includes(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
