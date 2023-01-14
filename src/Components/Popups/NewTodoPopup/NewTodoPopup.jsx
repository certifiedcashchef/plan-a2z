import React from "react";
import styles from "./NewTodoPopup.module.scss";
import money from "../../assets/money.png";
import { motion } from "framer-motion";

const NewTodoPopup = ({ setNewTodoPopup }) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.overlay}
        >
          <img src={money} alt="" className={styles.money} />
          <h1 className={styles.msg}>
            U Have Created Your First Task!
            <br />
            <span className={styles.alert}>REMEMBER: </span>
            "We Don't Count Money, We Decide How Much."
          </h1>
          <div>
            <button
              onClick={() => setNewTodoPopup(false)}
              className={styles.popupCloseBtn}
            >
              SEE YA!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewTodoPopup;
