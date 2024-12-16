function GrandMa({ grandmaPrice, grandmaActivate, cookies }) {
  const isAffordable = cookies >= grandmaPrice;
  const buttonStyle = {
    backgroundColor: isAffordable ? "hsl(109, 68%, 43%)" : "",
  };

  return (
    <>
      <button
        onClick={grandmaActivate}
        className={`button ${isAffordable ? "affordable" : ""}`}
        disabled={!isAffordable}
        style={buttonStyle}
      >
        Buy a grandmother: {grandmaPrice + " cookies"}
      </button>
    </>
  );
}

export default GrandMa;
