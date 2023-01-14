import React from "react";
import styles from "./ClearAllCompletedPopup.module.scss";
import starface from "../../assets/starface.png";
import raisinghands from "../../assets/raisinghands.png";
import { motion } from "framer-motion";

const ClearAllCompletedPopup = ({
  setClearAllCompletedPopup,
  prevCompletedTodos,
  setZeroTasksPopup,
  todos,
}) => {
  const handleClearAllCompleted = () => {
    setClearAllCompletedPopup(false);
    if (todos.length === 0) {
      setZeroTasksPopup(true);
    }
  };

  return (
    <div>
      <div className={styles.backdrop}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.overlay}
        >
          <img src={starface} alt="" className={styles.starface} />
          <h1 className={styles.msg}>
            Ayeee!, U Just Cleared{" "}
            <span className={styles.counter}>{prevCompletedTodos}</span>{" "}
            Completed Task/s!
            <img src={raisinghands} alt="" className={styles.raisingHands} />
          </h1>
          <div>
            <button
              onClick={handleClearAllCompleted}
              className={styles.popupCloseBtn}
            >
              YESSIR!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClearAllCompletedPopup;
