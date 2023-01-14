import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

const ClearAllCompletedTasksBtn = ({
  setClearAllCompletedPopup,
  setTodos,
  todos,
  setCompletedTodos,
}) => {
  // Clear All Completed Todos
  const handleClearCompleted = () => {
    setClearAllCompletedPopup(true);
    setTodos(todos.filter((todo) => !todo.completed));
    setCompletedTodos([]);
  };

  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ delay: 0.2 }}
      onClick={handleClearCompleted}
      className={styles.clearCompleted}
    >
      <h1>Clear all Completed tasks</h1>
    </motion.div>
  );
};

export default ClearAllCompletedTasksBtn;
