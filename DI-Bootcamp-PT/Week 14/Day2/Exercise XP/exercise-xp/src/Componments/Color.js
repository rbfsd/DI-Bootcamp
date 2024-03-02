import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteolor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, []);
  const changeColor = () => {
    setFavoriteolor("blue");
  };

  return (
    <div>
      <h2>Favorite Color: {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Color;
