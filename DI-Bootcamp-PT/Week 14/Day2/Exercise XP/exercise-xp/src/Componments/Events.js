import React, { useState } from "react";

const Events = () => {
  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`Enter key pressed with input value: ${event.target.value}`);
    }
  };

  const [isToggleOn, setToggleOn] = useState(true);

  const handleToggleClick = () => {
    // Toggle the value of isToggleOn
    setToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={handleToggleClick}>{isToggleOn ? "ON" : "OFF"}</button>
      <p>
        Output for '{isToggleOn ? "ON" : "OFF"}': {isToggleOn ? "on" : "off"}
      </p>
      <br />
      <button onClick={clickMe}>Click Me!</button>
      <br />
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Events;
