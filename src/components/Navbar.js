// src/components/Navbar.js
import React from "react";

function Navbar({ setSelectedGenre }) {
  const genres = [
    "All",
    "Action",
    "Educational",
    "Arcade",
    "Sports & Racing",
    "Puzzle",
  ];

  return (
    <nav>
      <ul className="navbar">
        {genres.map((genre, index) => (
          <li key={index} onClick={() => setSelectedGenre(genre)}>
            {genre}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
