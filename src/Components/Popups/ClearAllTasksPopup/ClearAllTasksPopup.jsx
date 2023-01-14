import React from "react";
import styles from "./ClearAllTasksPopup.module.scss";
import stop from "../../assets/stop.png";
import { motion } from "framer-motion";
const ClearAllTasksPopup = ({
  todos,
  setTodos,
  setCompletedTodos,
  setClearAllTasksPopup,
  setZeroTasksPopup,
}) => {
  const handleClearAllTasks = () => {
    setTodos([]);
    setCompletedTodos([]);
    setClearAllTasksPopup(false);
    setZeroTasksPopup(true);
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
          <img src={stop} alt="" className={styles.stop} />
          <h1 className={styles.msg}>
            Wait, A Second!
            <br /> UR About To Delete All Tasks Which Are{" "}
            <span className={styles.counter}>{todos.length}</span>
            <br />
            Including Completed, U Sure u wanna do that?
          </h1>
          <div className={styles.btns}>
            <button
              onClick={handleClearAllTasks}
              className={styles.popupDeleteBtn}
            >
              Delete All
            </button>
            <button
              onClick={() => setClearAllTasksPopup(false)}
              className={styles.popupCancelBtn}
            >
              Abort
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClearAllTasksPopup;
