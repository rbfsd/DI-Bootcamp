import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./Components/TodoApp"; // Assurez-vous que le chemin est correct

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
