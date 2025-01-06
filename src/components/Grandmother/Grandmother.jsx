function GrandMa({ grandmaPrice, grandmaActivate, cookies }) {
  const isAffordable = cookies >= grandmaPrice;
  const buttonStyle = {
    backgroundColor: isAffordable ? "hsl(109, 68%, 43%)" : "",
  };

  return (
    <>
      <button
        onClick={grandmaActivate}
        className="m-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 text-xs"
        disabled={!isAffordable}
        style={buttonStyle}
      >
        Buy a grandmother: {grandmaPrice + " cookies"}
      </button>
    </>
  );
}

export default GrandMa;
