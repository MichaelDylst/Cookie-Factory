import "./App.css";
import { useState, useEffect } from "react";

function Cookie({ onClick }) {
  return (
    <>
      <img
        src="/images/cookie.png"
        alt="cookie-image"
        className="cookie-image"
        onClick={onClick}
      />
    </>
  );
}

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [autoclicker, setAutoClicker] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [price, setPrice] = useState(10);
  function handleClick() {
    setCookies(cookies + 1);
  }
  function resetCookie() {
    setCookies(0);
    setAutoClicker(false);
    setMultiplier(1);
    setPrice(10);
  }
  function activateMultiply() {
    if (cookies >= price) {
      setCookies((prev) => prev - price);
      setAutoClicker(true);
      setMultiplier(multiplier + 1);
      setPrice((prev) => Math.floor(prev * 1.5));
    } else {
      alert("You do not have enough cookies to buy autoclick.");
    }
  }

  useEffect(() => {
    if (autoclicker) {
      const interval = setInterval(() => {
        setCookies((prev) => prev + multiplier);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoclicker, multiplier]);

  {
    return (
      <>
        <div className="game-board">
          <div className="cookie-holder">
            <h1>Cookie Clicker</h1>
            <Cookie onClick={handleClick} />
            <h4>You have {cookies} cookies!</h4>
            <div className="button-area">
              <ResetCookie resetCookie={resetCookie} />
              <MultiplyCookie
                activateMultiply={activateMultiply}
                price={price}
              />
            </div>
          </div>
          <div>
            <h4></h4>
          </div>
        </div>
      </>
    );
  }
}

function ResetCookie({ resetCookie }) {
  return (
    <>
      <button onClick={resetCookie} className="reset-cookies">
        Reset your cookies
      </button>
    </>
  );
}

function MultiplyCookie({ activateMultiply, price }) {
  return (
    <>
      <button onClick={activateMultiply} className="multiply-cookies">
        Buy Auto-click {"Price is: " + price}
      </button>
    </>
  );
}
