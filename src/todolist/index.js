import React, { useState, useEffect } from "react";
import TodoList from "./component/item";

const TDL = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (index, value) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: value } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        margin: 24,
        width: 500,
        paddingRight: 24,
        height: 500,
        border: "3px solid #ccc",

      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nội dung công việc"
        />
        <button onClick={addTodo}>Thêm</button>
      </div>
      <TodoList
        editTodo={editTodo}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TDL;
