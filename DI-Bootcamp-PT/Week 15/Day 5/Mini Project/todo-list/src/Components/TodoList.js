import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onClick={() => toggleTodo(index)}
        >
          {todo.text}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(index);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
