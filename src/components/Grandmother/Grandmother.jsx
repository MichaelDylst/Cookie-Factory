function GrandMa({ grandmaPrice, grandmaActivate, cookies }) {
  const isAffordable = cookies >= grandmaPrice;
  const buttonStyle = {
    backgroundColor: isAffordable ? "hsl(109, 68%, 43%)" : "hsl(0, 53%, 53%)",
  };

  return (
    <>
      <img
        src="/images/cookie-grandma.png"
        alt="grandma holding cookies"
        className="grandma-cookies-image"
      ></img>
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
