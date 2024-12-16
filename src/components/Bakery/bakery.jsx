import GrandMa from "../Grandmother/Grandmother";
import GrandMotherImage from "../Grandmother/Grandmother-image";

function Bakery({ cookies, grandmaPrice, grandmaActivate, grandmaCount }) {
  return (
    <>
      <div className="bakery">
        <h1>Bakery</h1>
        <h4>You have {cookies} cookies!</h4>
        <br />
        <div className="grandma-container">
          {Array.from({ length: grandmaCount }).map((_, index) => (
            <GrandMotherImage key={index} />
          ))}
        </div>
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
