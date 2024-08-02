// src/components/Game.js
import React, { useEffect } from "react";

function Game({ game }) {
  useEffect(() => {
    window.addEventListener("message", handleScoreSubmission);

    return () => {
      window.removeEventListener("message", handleScoreSubmission);
    };
  }, []);

  const handleScoreSubmission = (event) => {
    if (event.origin !== "https://trusted-origin.com") return;

    const { score } = event.data;
    console.log(`Score submitted: ${score}`);
    // Handle the score submission logic here
  };

  return (
    <div className="game">
      <img src={game.game_cover_url} alt={game.game_name} />
      <h3>{game.game_name}</h3>
      <p>{game.game_description}</p>
      <iframe src={game.game_play_url} title={game.game_name}></iframe>
    </div>
  );
}

export default Game;
