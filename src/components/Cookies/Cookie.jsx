import { motion } from "motion/react";
import { useState } from "react";

function Cookie({ onClick }) {
  const [clicks, setClicks] = useState([]);

  function handleCookieClick(e) {
    const x = e.clientX;
    const y = e.clientY;

    setClicks([...clicks, { id: Date.now(), x, y }]);

    onClick();
  }

  return (
    <>
      <motion.img
        src="/images/cookie.png"
        alt="cookie-image"
        className="cookie-image"
        onClick={handleCookieClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        }}
      />
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            left: click.x,
            top: click.y,
            color: "white",
            fontWeight: "bold",
            pointerEvents: "none",
          }}
          onAnimationComplete={() =>
            setClicks((prev) => prev.filter((c) => c.id !== click.id))
          }
        >
          +1
        </motion.div>
      ))}
    </>
  );
}

export default Cookie;
