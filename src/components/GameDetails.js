// src/components/GameDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import gamesData from "../games.json";

function GameDetails() {
  const { id } = useParams();
  const game = gamesData.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found.</div>;
  }

  return (
    // <div className="game-details">
    //   <h2>{game.game_name}</h2>
    //   <img src={game.game_cover_url} alt={game.game_name} />
    //   <iframe
    //     src={game.game_play_url}
    //     title={game.game_name}
    //     width="100%"
    //     height="600px"
    //     style={{ border: "none" }}
    //   ></iframe>
    // </div>

    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <iframe
            src={game.game_play_url}
            title={game.game_name}
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
