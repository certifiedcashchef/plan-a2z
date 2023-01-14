import React from "react";
import styles from "./MainText.module.scss";
import clock from "../assets/clock.png";
import { motion } from "framer-motion";

const MainText = () => {
  return (
    <header className={styles.intro}>
      <motion.img
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ delay: 0.2 }}
        src={clock}
        alt="clock"
        className="clock"
      />
      <motion.h1
        animate={{ scale: 1 }}
        initial={{ scale: 1.5 }}
        className={styles.textLogo}
      >
        PLAN <span className={styles.purpleA}>A</span>2
        <span className={styles.pinkZ}>Z</span>
      </motion.h1>
    </header>
  );
};

export default MainText;
