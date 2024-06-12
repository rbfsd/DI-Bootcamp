// src/SearchBox.js
import React from "react";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for books..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchBox;
