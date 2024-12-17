import "./App.css";
import { useState, useEffect } from "react";
import Cookie from "./components/Cookies/Cookie.jsx";
import ResetCookie from "./components/ResetGame/ResetGame.jsx";
import Bakery from "./components/Bakery/bakery.jsx";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [grandmaActive, setGrandmaActive] = useState(false);
  const [grandmaPrice, setGrandmaPrice] = useState(40);
  const [grandmaMultiplier, setGrandmaMultiplier] = useState(0);
  const [grandmaCount, setGrandmaCount] = useState(0);
  const [ovenPrice, setOvenPrice] = useState(80);
  const [ovenActive, setOvenActive] = useState(false);
  const [ovenCount, setOvenCount] = useState(0);

  function handleClick() {
    setCookies(cookies + 1);
  }

  function resetGame() {
    setCookies(0);
    setGrandmaActive(false);
    setGrandmaMultiplier(1);
    setGrandmaPrice(40);
    setGrandmaCount(0);
    setOvenPrice(80);
    setOvenCount(0);
  }

  function ovenActivate() {
    if (cookies >= ovenPrice) {
      setCookies((prev) => prev - ovenPrice);
      setOvenActive(true);
      setGrandmaMultiplier(grandmaMultiplier * 2);
      setOvenPrice((prev) => Math.floor(prev * 2));
      setOvenCount((prev) => prev + 1);
    }
  }

  function grandmaActivate() {
    if (cookies >= grandmaPrice) {
      setCookies((prev) => prev - grandmaPrice);
      setGrandmaActive(true);
      setGrandmaMultiplier(grandmaMultiplier + 1);
      setGrandmaPrice((prev) => Math.floor(prev * 1.8));
      setGrandmaCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (grandmaActive) {
      const interval = setInterval(() => {
        setCookies((prev) => prev + grandmaMultiplier);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [grandmaActive, grandmaMultiplier]);

  {
    return (
      <>
        <div className="game-container">
          <div className="header">
            <ResetCookie resetGame={resetGame} />
          </div>
          <div className="total-game">
            <div className="cookie-holder">
              <h1>Cookie Clicker</h1>
              <Cookie onClick={handleClick} />
            </div>
            <div>
              <Bakery
                cookies={cookies}
                grandmaActivate={grandmaActivate}
                grandmaPrice={grandmaPrice}
                grandmaCount={grandmaCount}
                ovenPrice={ovenPrice}
                ovenActivate={ovenActivate}
                ovenCount={ovenCount}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
