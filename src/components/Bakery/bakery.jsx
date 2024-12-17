import GrandMa from "../Grandmother/Grandmother";
import GrandMotherImage from "../Grandmother/Grandmother-image";
import Oven from "../Oven/oven";
import OvenImage from "../Oven/oven-image";

function Bakery({
  cookies,
  grandmaPrice,
  grandmaActivate,
  grandmaCount,
  ovenPrice,
  ovenActivate,
  ovenCount,
}) {
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
        <div className="oven-container">
          {Array.from({ length: ovenCount }).map((_, index) => (
            <OvenImage key={index} />
          ))}
        </div>
        <GrandMa
          grandmaPrice={grandmaPrice}
          grandmaActivate={grandmaActivate}
          cookies={cookies}
        />
        <Oven
          ovenPrice={ovenPrice}
          cookies={cookies}
          ovenActivate={ovenActivate}
          ovenCount={ovenCount}
        />
      </div>
    </>
  );
}

export default Bakery;
