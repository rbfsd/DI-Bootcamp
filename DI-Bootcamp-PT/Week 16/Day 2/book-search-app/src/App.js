// src/App.js
import React from "react";
import Header from "./Components/Header";
import Book from "./Components/Book";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Book />
    </div>
  );
};

export default App;
