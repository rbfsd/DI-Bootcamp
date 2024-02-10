// app.js
import peopleData from "./data.js";

// Write a function that calculates and prints the average age of all the persons in the array.
function calculateAverageAge() {
  const totalAge = peopleData.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / peopleData.length;

  console.log(`Average age of all persons: ${averageAge.toFixed(2)}`);
}

calculateAverageAge();
