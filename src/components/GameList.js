// src/components/GameList.js
import React from "react";
import { Link } from "react-router-dom";
import gamesData from "../games.json";

function GameList({ selectedGenre }) {
  const filteredGames =
    selectedGenre === "All"
      ? gamesData
      : gamesData.filter((game) => game.genre_name === selectedGenre);

  return (
    <div className="game-list">
      {filteredGames.map((game) => (
        <div key={game.id} className="game-item">
          <Link to={`/game/${game.id}`}>
            <h3>{game.game_name}</h3>
            <img src={game.game_cover_url} alt={game.game_name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GameList;
