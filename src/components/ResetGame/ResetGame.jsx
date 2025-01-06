function ResetCookie({ resetGame }) {
  return (
    <>
      <button
        onClick={resetGame}
        className="m-2 bg-red-500 text-white py-1 px-1 rounded hover:bg-red-600 text-sm"
      >
        Reset Game
      </button>
    </>
  );
}

export default ResetCookie;
