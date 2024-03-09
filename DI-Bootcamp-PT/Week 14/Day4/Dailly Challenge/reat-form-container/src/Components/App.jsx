import React, { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    veganMeal: false,
  });

  const [enteredInfo, setEnteredInfo] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "age" ||
      name === "gender" ||
      name === "destination"
    ) {
      setEnteredInfo((prevEnteredInfo) => {
        return {
          ...prevEnteredInfo,
          [name]: value,
        };
      });
    } else {
      setEnteredInfo((prevEnteredInfo) => {
        return {
          ...prevEnteredInfo,
          dietaryRestrictions: {
            ...prevEnteredInfo.dietaryRestrictions,
            [name]: checked,
          },
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    params.set("firstName", formData.firstName);
    params.set("lastName", formData.lastName);
    params.set("age", formData.age);
    params.set("gender", formData.gender);
    params.set("destination", formData.destination);
    if (formData.nutsFree) {
      params.set("nutsFree", "on");
    }
    if (formData.lactoseFree) {
      params.set("lactoseFree", "on");
    }
    if (formData.veganMeal) {
      params.set("veganMeal", "on");
    }
    window.history.pushState({}, "", `?${params}`);
  };

  return (
    <div className="App">
      <FormComponent
        formData={formData}
        enteredInfo={enteredInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
