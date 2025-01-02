import "./App.css";
import { useState, useEffect } from "react";
import Cookie from "../Cookies/Cookie.jsx";
import ResetCookie from "../ResetGame/ResetGame.jsx";
import Bakery from "../Bakery/bakery.jsx";
import SaveGame from "../saveGame/SaveGame";
import { useLocation } from "react-router-dom";

const APIURL = "http://localhost:3001";

export default function GamePage() {
  const { state } = useLocation();
  const { gameId } = state || {};
  const [cookies, setCookies] = useState(0);
  const [grandmaActive, setGrandmaActive] = useState(false);
  const [grandmaPrice, setGrandmaPrice] = useState(40);
  const [grandmaMultiplier, setGrandmaMultiplier] = useState(0);
  const [grandmaCount, setGrandmaCount] = useState(0);
  const [ovenPrice, setOvenPrice] = useState(80);
  const [ovenActive, setOvenActive] = useState(false);
  const [ovenCount, setOvenCount] = useState(0);

  useEffect(() => {
    async function loadGame() {
      if (gameId && gameId !== "New Game") {
        try {
          const response = await fetch(`${APIURL}/GetGameInfo`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({ game_id: gameId }),
          });
          const result = await response.json();
          console.log(result);
          if (response.ok) {
            setCookies(result[0].cookies);
            setGrandmaCount(result[0].grandma);
            setOvenCount(result[0].oven);
            setGrandmaActive(result[0].grandma > 0);
            setOvenActive(result[0].oven > 0);
            if (result[0].grandma >= 1) {
              setGrandmaMultiplier(result[0].grandma * 1);
              setGrandmaPrice(result[0].grandma * 40);
            } else {
              setGrandmaPrice(40);
            }
            if (result[0].oven >= 1) {
              setOvenPrice(result[0].oven * 80);
            } else {
              setOvenPrice(80);
            }
          }
        } catch (error) {
          console.error("Game loading failed. ", error);
        }
      } else {
        resetGame();
      }
    }
    loadGame();
  }, []);

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

  const saveGameInfo = async () => {
    try {
      const response = await fetch(`${APIURL}/saveGameInfo`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookies: cookies,
          grandma: grandmaCount,
          ovent: ovenCount,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {}
  };

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
            <SaveGame saveGame={saveGameInfo} />
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
