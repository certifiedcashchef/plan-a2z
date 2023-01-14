import React, { useEffect, useRef } from "react";
import styles from "./TodoInput.module.scss";
import rocket from "../assets/rocket.png";
import ClearAllTasksBtn from "../MainBtns/ClearAllTasksBtn";
import ClearAllCompletedTasksBtn from "../MainBtns/ClearAllCompletedTasksBtn";
import { motion } from "framer-motion";

const TodoInput = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  welcomePopup,
  setClearAllCompletedPopup,
  setCompletedTodos,
  completedTodos,
  setClearAllTasksPopup,
  setNewTodoPopup,
}) => {
  // Updating Edited Todo With The New One
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  // Focusing On The Input Form
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [welcomePopup, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  // Create & Edit a Todo
  const onFormSumbit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      const id = todos.length ? todos[todos.length - 1]?.id + 1 : 0;
      setTodos([...todos, { id: id, title: input, completed: false }]);
      setInput("");
      if (todos.length === 0) {
        setNewTodoPopup(true);
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={onFormSumbit}>
        <motion.input
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ type: "tween", duration: 0.4 }}
          ref={inputRef}
          type="text"
          placeholder="What's Next?"
          className={styles.inputForm}
          value={input}
          onChange={onInputChange}
          required
        />
        <motion.button
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ type: "tween", duration: 0.4 }}
          className={styles.addBtn}
          type="submit"
        >
          {editTodo ? "ok" : "let's go!"}
          <motion.img
            animate={{ x: 0 }}
            initial={{ x: 200 }}
            transition={{ type: "tween", duration: 0.6 }}
            src={rocket}
            alt="rocket"
            className={styles.rocket}
          />
        </motion.button>
      </form>

      <div className={styles.clearBtns}>
        {todos.length > 1 && (
          <ClearAllTasksBtn
            setClearAllTasksPopup={setClearAllTasksPopup}
            setCompletedTodos={setCompletedTodos}
            setTodos={setTodos}
          />
        )}

        {completedTodos.length > 0 && (
          <ClearAllCompletedTasksBtn
            setTodos={setTodos}
            todos={todos}
            setCompletedTodos={setCompletedTodos}
            setClearAllCompletedPopup={setClearAllCompletedPopup}
          />
        )}
      </div>
    </div>
  );
};

export default TodoInput;
