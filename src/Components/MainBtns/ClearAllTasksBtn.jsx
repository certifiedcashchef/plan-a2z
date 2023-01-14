import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

const ClearAllTasksBtn = ({ setClearAllTasksPopup }) => {
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      className={styles.clearBtns}
    >
      <div
        onClick={() => setClearAllTasksPopup(true)}
        className={styles.clearAll}
      >
        <h1>Clear all tasks</h1>
      </div>
    </motion.div>
  );
};

export default ClearAllTasksBtn;
