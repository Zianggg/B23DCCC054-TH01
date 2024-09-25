import React from "react";
import TodoItem from "./list";

const TodoList = ({
  editTodo,
  isEdit,
  setIsEdit,
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          editTodo={editTodo}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
