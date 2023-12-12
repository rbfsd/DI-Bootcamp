var day = 2;

switch (day) {
  case 1: //if day = 1
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesdey");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default: //if day doesn't match any of above
    console.log("invalid");
}

// EXERCICE 1

let carDrive = 20;

if (age < 18) {
  console.log("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
  console.log(`Congratulations! You can now legally drive a car.`);
} else if (age > 18) {
  console.log("Congraulation");
}

// default keyword

let fruit = "Papayas";

switch (fruit) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruit + ".");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
}

//  EXERCICE 2

// Step 1: Initialize variable 'a' and assign the value of the sum 2 + 2
let a = 2 + 2;

// Step 2: Evaluate the value of 'a' in a switch statement
switch (a) {
  // Step 3: Check if 'a' is equal to 3
  case 3:
    alert("Too small");
    break;

  // Step 4: Check if 'a' is equal to 4
  case 4:
    alert("Exactly!");
    break;

  // Step 5: Check if 'a' is equal to 5
  case 5:
    alert("Too large");
    break;

  // Step 6: If 'a' doesn't match any of the previous cases, execute the default case
  default:
    alert("I don't know such values");
}

// expeted value : 'exactly'

// OBJECTS

let person = {
  firstName: "Raphael",
  lastName: "Belhassen",
  age: 20,
  country: "Israel",
};

console.log(person.firstName); // Raphael
console.log(person["firstName"]); // Raphael

//Adding/ Changing Object Properties

let persson = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "Sarah";
person.eyeColor = "blue";

console.log(person);

// Deleting Object Properties

let persons = {
  firstName: "John",
  lastName: "Doe",
};

delete person.firstName;
console.log(person);

// EXERCICE 1
// Create an object that has properties "username" and "password". Fill those values in with strings.
let user = {
  userName: "Jphn",
  passWord: "Deep",
};

// Create an array which contains the object you have made above and name the array "database".
let database = [user];

// Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsFeed = [
  { username: "Samantha", timeline: ["Eating a sandwich", "Watching TV"] },
  { username: "Oliver", timeline: ["Running in the park", "Reading a book"] },
  { username: "Emma", timeline: ["Washing dishes", "Taking a nap"] },
];
