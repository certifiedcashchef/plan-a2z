// Import React Files
import "./app.scss";
import { useEffect, useRef, useState } from "react";

// Import All Components
import {
  WelcomePopup,
  MainText,
  TodoInput,
  TodosList,
  CompletePopup,
  ClearAllCompletedPopup,
  RemovePopup,
  ClearAllTasksPopup,
  NewTodoPopup,
  ZeroTasksPopup,
} from "./organizeImporting.js";

function App() {
  // Local Storage
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const initialStateCompleted =
    JSON.parse(localStorage.getItem("completedTodos")) || [];

  // Whole App States
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [completedTodos, setCompletedTodos] = useState(initialStateCompleted);
  const [welcomePopup, setWelcomePopup] = useState(true);
  const [completePopup, setCompletePopup] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [deletePopup, setDeletePopup] = useState({
    show: false,
    id: null,
  });
  const [clearAllCompletedPopup, setClearAllCompletedPopup] = useState(false);
  const [clearAllTasksPopup, setClearAllTasksPopup] = useState(false);
  const [newTodoPopup, setNewTodoPopup] = useState(false);
  const [zeroTasksPopup, setZeroTasksPopup] = useState(false);

  // Previous Completed Todos State
  const prevCompletedTodosState = useRef();
  useEffect(() => {
    prevCompletedTodosState.current = completedTodos.length;
  });
  const prevCompletedTodos = prevCompletedTodosState.current;

  // Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <div className="App">
      <WelcomePopup popup={welcomePopup} setPopup={setWelcomePopup} />
      {!welcomePopup && (
        <div className="container">
          {newTodoPopup && <NewTodoPopup setNewTodoPopup={setNewTodoPopup} />}
          {zeroTasksPopup && todos.length === 0 && (
            <ZeroTasksPopup setZeroTasksPopup={setZeroTasksPopup} />
          )}

          {completePopup && (
            <CompletePopup setCompletePopup={setCompletePopup} />
          )}

          {clearAllCompletedPopup && (
            <ClearAllCompletedPopup
              prevCompletedTodos={prevCompletedTodos}
              setClearAllCompletedPopup={setClearAllCompletedPopup}
              setZeroTasksPopup={setZeroTasksPopup}
              todos={todos}
            />
          )}

          {deletePopup.show && (
            <RemovePopup
              todos={todos}
              setTodos={setTodos}
              deletePopup={deletePopup}
              setDeletePopup={setDeletePopup}
              setZeroTasksPopup={setZeroTasksPopup}
            />
          )}

          {clearAllTasksPopup && (
            <ClearAllTasksPopup
              todos={todos}
              setTodos={setTodos}
              setCompletedTodos={setCompletedTodos}
              setClearAllTasksPopup={setClearAllTasksPopup}
              setZeroTasksPopup={setZeroTasksPopup}
            />
          )}

          <MainText />

          <TodoInput
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            welcomePopup={welcomePopup}
            setNewTodoPopup={setNewTodoPopup}
            setClearAllTasksPopup={setClearAllTasksPopup}
            setClearAllCompletedPopup={setClearAllCompletedPopup}
          />

          {todos.map((todo) => (
            <TodosList
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setCompletePopup={setCompletePopup}
              setDeletePopup={setDeletePopup}
              setEditTodo={setEditTodo}
            />
          ))}

          <footer className="footer"></footer>
        </div>
      )}
    </div>
  );
}

export default App;
