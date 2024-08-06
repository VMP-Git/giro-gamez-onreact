// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import ScrollToTopButton
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  return (
    <Router>
      <div className="App">
        <header>
          {/* <h1>Giro Gamez</h1> */}
          <Navbar setSelectedGenre={setSelectedGenre} />
        </header>
        <Routes>
          <Route
            path="/"
            element={<GameList selectedGenre={selectedGenre} />}
          />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
        <ScrollToTopButton /> {/* Add ScrollToTopButton */}
      </div>
    </Router>
  );
}

export default App;
