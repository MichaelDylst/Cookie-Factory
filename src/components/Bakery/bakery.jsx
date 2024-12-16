import GrandMa from "../Grandmother/Grandmother";

function Bakery({ cookies, grandmaPrice, grandmaActivate }) {
  return (
    <>
      <div className="bakery">
        <h1>Bakery</h1>
        <h4>You have {cookies} cookies!</h4>
        <br />
        <GrandMa
          grandmaPrice={grandmaPrice}
          grandmaActivate={grandmaActivate}
          cookies={cookies}
        />
      </div>
    </>
  );
}

export default Bakery;
