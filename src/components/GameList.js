// src/components/GameList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import gamesData from "../games.json";

function GameList({ selectedGenre }) {
  const [displayCount, setDisplayCount] = useState({});

  const INITIAL_DISPLAY_COUNT = 6; // Number of games to display initially

  // Function to group games by genre
  const groupGamesByGenre = (games) => {
    return games.reduce((acc, game) => {
      if (!acc[game.genre_name]) {
        acc[game.genre_name] = [];
      }
      acc[game.genre_name].push(game);
      return acc;
    }, {});
  };

  const filteredGames =
    selectedGenre === "All"
      ? groupGamesByGenre(gamesData)
      : {
          [selectedGenre]: gamesData.filter(
            (game) => game.genre_name === selectedGenre
          ),
        };

  const handleLoadMore = (genre) => {
    setDisplayCount((prevDisplayCount) => ({
      ...prevDisplayCount,
      [genre]:
        (prevDisplayCount[genre] || INITIAL_DISPLAY_COUNT) +
        INITIAL_DISPLAY_COUNT,
    }));
  };

  return (
    <div className="container mt-4">
      {Object.keys(filteredGames).map((genre) => {
        const displayLimit = displayCount[genre] || INITIAL_DISPLAY_COUNT;
        const gamesToShow = filteredGames[genre].slice(0, displayLimit);
        const hasMoreGames = displayLimit < filteredGames[genre].length;

        return (
          <div key={genre} className="mb-4">
            <h2>{genre}</h2>
            <div className="row">
              {gamesToShow.map((game) => (
                <div key={game.id} className="col-md-3 mb-4">
                  <div className="card">
                    <Link to={`/game/${game.id}`} className="game-name">
                      <img
                        src={game.game_cover_url}
                        className="card-img-top"
                        alt={game.game_name}
                      />
                      {/* <div className="card-body">
                        <h5 className="card-title">{game.game_name}</h5>
                      </div> */}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {hasMoreGames && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleLoadMore(genre)}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GameList;
