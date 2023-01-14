// Import React Files
import React from "react";
import { motion } from "framer-motion";
// Import Component Styles
import styles from "./TodosList.module.scss";

// Import All Images
import fire from "../assets/fire.png";
import complete from "../assets/complete.png";
import edit from "../assets/edit.png";
import remove from "../assets/remove.png";
import { useRef, useEffect } from "react";

const TodosList = ({
  todo,
  todos,
  setTodos,
  setCompletePopup,
  setDeletePopup,
  setEditTodo,
  setCompletedTodos,
  completedTodos,
}) => {
  // Scroll Down To Last Todo
  const scrollDownRef = useRef(null);
  useEffect(() => {
    scrollDownRef.current?.scrollIntoView();
  }, [todo]);

  const toggleCompletePopup = () => {
    setCompletePopup(true);
  };

  const handleComplete = (todo) => {
    setCompletedTodos([...completedTodos, { id: id, completed: true }]);

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    toggleCompletePopup();
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = () => {
    setDeletePopup({
      show: true,
      id,
    });
  };

  const { title, id } = todo;
  return (
    <>
      <ul
        style={{ opacity: todo.completed ? "0.4" : "" }}
        className={styles.todoList}
      >
        <motion.img
          animate={{ x: 0 }}
          initial={{ x: -400 }}
          transition={{ type: "tween", duration: 0.4 }}
          src={fire}
          alt=""
          className={styles.fire}
        />
        <motion.li
          whileHover={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
          className={styles.todoContainer}
        >
          <h1
            style={{ color: todo.completed ? "#35cdff" : "" }}
            className={styles.todoContent}
          >
            {title}
          </h1>
          <div
            style={{ pointerEvents: todo.completed ? "none" : null }}
            className={styles.todoBtns}
          >
            <div>
              <motion.img
                animate={{ x: 0 }}
                initial={{ x: 400 }}
                transition={{ type: "tween", duration: 0.6 }}
                onClick={() => handleComplete(todo)}
                className={styles.completeBtn}
                src={complete}
                alt=""
              />
            </div>
            <div>
              <motion.img
                animate={{ x: 0 }}
                initial={{ x: 400 }}
                transition={{ type: "tween", duration: 0.7 }}
                onClick={() => handleEdit(todo)}
                className={styles.editBtn}
                src={edit}
                alt=""
              />
            </div>
            <div>
              <motion.img
                animate={{ x: 0 }}
                initial={{ x: 400 }}
                transition={{ type: "tween", duration: 0.8 }}
                onClick={handleDelete}
                className={styles.removeBtn}
                src={remove}
                alt=""
              />
            </div>
          </div>
        </motion.li>
      </ul>
      <div ref={scrollDownRef} />
    </>
  );
};

export default TodosList;
