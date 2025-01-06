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
      <div className="p-4 max-w-sm mx-auto mt-20 bg-gray-200 rounded-xl shadow-lg flex items-center gap-x-4 justify-center">
        <div className="shrink-0">
          <h2 className="text-gray-500 font-bold  text-center">
            SELECT A SAVED GAME:
          </h2>
          <select
            className="py-2 px-3 border rounded-md"
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
            className="m-4 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 disabled:bg-gray-400"
            onClick={() => loadGame(selectedGame)}
            disabled={!selectedGame}
          >
            Load Game
          </button>
        </div>
      </div>
    </>
  );
}
