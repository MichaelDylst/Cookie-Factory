function Oven({ ovenPrice, cookies, ovenActivate }) {
  const isAffordable = cookies >= ovenPrice;
  const buttonStyle = {
    backgroundColor: isAffordable ? "hsl(109, 68%, 43%)" : "",
  };

  return (
    <>
      <button
        onClick={ovenActivate}
        className="m-1 bg-blue-500 text-white py-2 px-3 rounded hover:bg-green-500 disabled:bg-gray-400 text-xs"
        style={buttonStyle}
        disabled={!isAffordable}
      >
        Buy an Oven: {ovenPrice}
      </button>
    </>
  );
}

export default Oven;
