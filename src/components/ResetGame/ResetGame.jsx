function ResetCookie({ resetGame }) {
  return (
    <>
      <button onClick={resetGame} className="reset-cookies">
        Reset Game
      </button>
    </>
  );
}

export default ResetCookie;
