import React, { useState } from "react";

const TodoItem = ({
  isEdit,
  editTodo,
  setIsEdit,
  todo,
  index,
  toggleTodo,
  deleteTodo,
}) => {
  const [valueInput, setValueInput] = useState(todo.text);

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input onClick={() => toggleTodo(index)} type="checkbox"></input>
        </div>
        {!isEdit ? (
          <div>{todo.text}</div>
        ) : (
          <input
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
            defaultValue={todo.text}
          />
        )}
        <div>
          <button
            onClick={() => {
              if (isEdit) {
                editTodo(index, valueInput);
              }
              setIsEdit(!isEdit);
            }}
          >
            {isEdit ? "Lưu lại" : "Chỉnh sửa"}
          </button>
          <button onClick={() => deleteTodo(index)}>Xóa</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;