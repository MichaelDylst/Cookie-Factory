function Oven({ ovenPrice, cookies, ovenActivate }) {
  const isAffordable = cookies >= ovenPrice;
  const buttonStyle = {
    backgroundColor: isAffordable ? "hsl(109, 68%, 43%)" : "",
  };

  return (
    <>
      <button
        onClick={ovenActivate}
        className={`button ${isAffordable ? "affordable" : ""}`}
        style={buttonStyle}
        disabled={!isAffordable}
      >
        Buy an Oven: {ovenPrice}
      </button>
    </>
  );
}

export default Oven;
