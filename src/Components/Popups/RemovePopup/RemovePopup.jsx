import React from "react";
import styles from "./RemovePopup.module.scss";
import stop from "../../assets/stop.png";
import { motion } from "framer-motion";

const RemovePopup = ({
  todos,
  setTodos,
  deletePopup,
  setDeletePopup,
  setZeroTasksPopup,
}) => {
  const handleDeleteTrue = () => {
    if (deletePopup.show) {
      const filteredData = todos.filter((todo) => todo.id !== deletePopup.id);
      setTodos(filteredData);
      setDeletePopup({
        show: false,
        id: null,
      });
      setZeroTasksPopup(true);
    }
  };

  const handleDeleteFalse = () => {
    setDeletePopup({
      show: false,
      id: null,
    });
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
            Hola, Hola, Hola!
            <br /> UR About To Delete This Task, U Sure?
          </h1>
          <div className={styles.btns}>
            <button
              onClick={handleDeleteTrue}
              className={styles.popupDeleteBtn}
            >
              Delete It
            </button>
            <button
              onClick={handleDeleteFalse}
              className={styles.popupCancelBtn}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RemovePopup;
