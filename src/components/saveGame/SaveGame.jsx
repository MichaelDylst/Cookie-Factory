function SaveGame({ saveGame }) {
  return (
    <>
      <button
        className="m-2 bg-blue-500 text-white p-1 rounded hover:bg-blue-600 text-sm"
        onClick={saveGame}
      >
        Save Game
      </button>
    </>
  );
}

export default SaveGame;
