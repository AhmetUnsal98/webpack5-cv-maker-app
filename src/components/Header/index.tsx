import React, { useState } from "react";
import "./header.scss";
import { motion } from "framer-motion";
const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <motion.div
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={fix ? "header fixed" : "header"}
    >
      <div className="logo-container">
        <p>LOGO.</p>
      </div>
      <div className="auth-container">
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </div>
    </motion.div>
  );
};

export default Header;
