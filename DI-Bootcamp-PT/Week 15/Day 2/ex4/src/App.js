import React from "react";

const App = () => {
  const handleClick = () => {
    console.log("click");
  };

  return <button onClick={handleClick}>Post Data</button>;
};

export default App;
