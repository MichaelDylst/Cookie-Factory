import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const APIURL = "http://localhost:3001";

export default function GameSelector() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${APIURL}/game-information`);
        const result = await response.json();
        setGames(result);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    }
    fetchData();
  }, []);

  const loadGame = (gameId) => {
    navigate(`/game`, { state: { gameId } });
  };

  return (
    <>
      <h2>Select a saved game:</h2>
      <select
        id="game-dropdown"
        value={selectedGame}
        onChange={(e) => setSelectedGame(e.target.value)}
      >
        <option></option>
        <option>New Game</option>
        {games.map((game) => (
          <option
            key={game.game_id}
            value={game.game_id}
          >{`Game ID: ${game.game_id}`}</option>
        ))}
      </select>
      <button
        className="load-game-button"
        onClick={() => loadGame(selectedGame)}
        disabled={!selectedGame}
      >
        Load Game
      </button>
    </>
  );
}
