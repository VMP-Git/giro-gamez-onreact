// src/helpers/groupByGenre.js
export const groupByGenre = (games) => {
  return games.reduce((acc, game) => {
    const genre = game.genre_name;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(game);
    return acc;
  }, {});
};
