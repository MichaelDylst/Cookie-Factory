import { motion } from "motion/react";

function Cookie({ onClick }) {
  return (
    <>
      <motion.img
        src="/images/cookie.png"
        alt="cookie-image"
        className="cookie-image"
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      />
    </>
  );
}

export default Cookie;
