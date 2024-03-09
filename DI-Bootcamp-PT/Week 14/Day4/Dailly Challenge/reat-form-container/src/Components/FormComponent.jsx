import React from "react";
import "../FormComponent.css";

const FormComponent = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={props.formData.firstName}
            onChange={props.handleChange}
          />
        </label>
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={props.formData.lastName}
            onChange={props.handleChange}
          />
        </label>
        <label className="form-label">
          Age:
          <input
            type="number"
            name="age"
            value={props.formData.age}
            onChange={props.handleChange}
          />
        </label>
        <label className="form-label">
          Gender:
          <select
            name="gender"
            value={props.formData.gender}
            onChange={props.handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="form-label">
          Destination:
          <select
            name="destination"
            value={props.formData.destination}
            onChange={props.handleChange}
          >
            <option value="">Select</option>
            <option value="france">France</option>
            <option value="japan">Japan</option>
          </select>
        </label>
        <label className="form-label">
          Dietary Restrictions:
          <label>
            Nuts free:
            <input
              type="checkbox"
              name="nutsFree"
              checked={props.formData.nutsFree}
              onChange={props.handleChange}
            />
          </label>
          <label>
            Lactose free:
            <input
              type="checkbox"
              name="lactoseFree"
              checked={props.formData.lactoseFree}
              onChange={props.handleChange}
            />
          </label>
          <label>
            Vegan meal:
            <input
              type="checkbox"
              name="veganMeal"
              checked={props.formData.veganMeal}
              onChange={props.handleChange}
            />
          </label>
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      <div className="form-output">
        <p>
          Your name: {props.enteredInfo.firstName} {props.enteredInfo.lastName}
        </p>
        <p>Your age: {props.enteredInfo.age}</p>
        <p>Your gender: {props.formData.gender}</p>
        <p>Your destination: {props.formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <ul>
          {Object.entries(props.enteredInfo.dietaryRestrictions).map(
            ([key, value]) => (
              <li key={key}>
                {key}: {value ? "Yes" : "No"}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FormComponent;
