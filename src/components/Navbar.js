// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../GiroGamez.png"; // Import the logo image

function Navbar({ setSelectedGenre }) {
  const navigate = useNavigate();
  const genres = [
    "All",
    "Action",
    "Educational",
    "Arcade",
    "Sports & Racing",
    "Puzzle",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            setSelectedGenre("All");
            navigate("/");
          }}
        >
          <img src={logo} alt="Giro Gamez" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-centre"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {genres.map((genre, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
