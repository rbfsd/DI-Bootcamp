import React from "react";
import Car from "./Componments/Car";
import Events from "./Componments/Events";
import Phone from "./Componments/Phone";
import Color from "./Componments/Color";

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car carInfo={carInfo} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
