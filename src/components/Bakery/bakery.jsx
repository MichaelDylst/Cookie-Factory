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
      <div className="flex-col items-center text-center">
        <h4 className="text-xl font-semibold mt-7">
          You have {cookies} cookies!
        </h4>
        <div className="">
          {" "}
          <div className="flex justify-center flex-wrap">
            {Array.from({ length: grandmaCount }).map((_, index) => (
              <GrandMotherImage key={index} />
            ))}
          </div>
          <div className="flex justify-center flex-wrap">
            {Array.from({ length: ovenCount }).map((_, index) => (
              <OvenImage key={index} />
            ))}
          </div>
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
