// Exercice 1
// part 1
const people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the people array
people.splice(people.indexOf("Greg"), 1);

// Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// Add your name to the end of the people array
people.push("Yourname");

// Console.log Mary’s index
console.log("Mary's index is:", people.indexOf("Mary"));

// Make a copy of the people array excluding "Mary" and your name
const peopleCopy = people.slice(1, -1);

// Console.log the copy
console.log("Copy without 'Mary' and 'Yourname':", peopleCopy);

// Index of "Foo" (not present in the array)
console.log("Index of 'Foo':", people.indexOf("Foo")); // Output: -1

// Variable last with the value of the last element in the array
const last = people[people.length - 1];
console.log("Last element in the array:", last);

// part 2
const people = ["Mary", "Devon", "Jason", "Yourname"];

// Using a loop to console.log each person
console.log("Iterating through the people array:");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Using a loop to exit after console.log "Devon"
console.log("\nIterating through the people array and exiting after 'Devon':");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);

  // Exit the loop if the current person is "Devon"
  if (people[i] === "Devon") {
    break;
  }
}

// Exercice 2
const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

// Loop through the array and console.log the choices
console.log("Looping through favorite colors:");

for (let i = 0; i < colors.length; i++) {
  let suffix = suffixes[i] || suffixes[4]; // Use "th" for numbers greater than 3
  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// exercice 3
let userInput;

// Prompt the user for a number
do {
  userInput = prompt("Please enter a number:");
  if (userInput === null) {
    // If the user clicks Cancel, exit the loop
    break;
  }

  // Check the data type using typeof
  if (typeof +userInput === "number" && !isNaN(userInput)) {
    userInput = +userInput; // Convert the input to a number
  } else {
    alert("Please enter a valid number.");
    continue; // Skip the rest of the loop and ask for a new number
  }

  // Continue asking while the number is smaller than 10
} while (userInput < 10);

// Optional: Display a message after exiting the loop
if (userInput !== null) {
  alert("Thank you! You entered a number greater than or equal to 10.");
} else {
  alert("You clicked Cancel or entered an invalid value. Exiting the program.");
}

// exercice 4

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Console.log the number of floors in the building
console.log("Number of floors in the building:", building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3
console.log(
  "Number of apartments on the first floor:",
  building.numberOfAptByFloor.firstFloor
);
console.log(
  "Number of apartments on the third floor:",
  building.numberOfAptByFloor.thirdFloor
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment
const secondTenant = building.nameOfTenants[1];
const roomsForSecondTenant = building.numberOfRoomsAndRent[secondTenant][0];
console.log(
  `${secondTenant}'s number of rooms in his apartment:`,
  roomsForSecondTenant
);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, increase Dan’s rent to 1200
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent has been increased to 1200.");
}

console.log("Updated rent information:", building.numberOfRoomsAndRent);

// exercice 5
const family = {
  father: "John",
  mother: "Jane",
  son: "Jack",
  daughter: "Jill",
  pet: "Max",
};

// Using a for-in loop to console.log the keys of the object
console.log("Keys of the family object:");
for (let key in family) {
  console.log(key);
}

// Using a for-in loop to console.log the values of the object
console.log("\nValues of the family object:");
for (let key in family) {
  console.log(family[key]);
}

// exercice 6

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

let result = "";

// Using a for loop to concatenate the values
for (let key in details) {
  result += details[key] + " ";
}

// Log the concatenated string
console.log(result.trim());

// exercice 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter of each name, sort them, and concatenate into a string
const secretSocietyName = names
  .map((name) => name[0])
  .sort()
  .join("");

// Log the name of the secret society
console.log("The name of the secret society:", secretSocietyName);
