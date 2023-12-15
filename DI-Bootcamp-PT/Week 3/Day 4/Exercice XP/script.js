// EXERCISE 1
let x = 5;
let y = 2;

if (x > y) {
  console.log("X is greater than Y");
} else if (y > x) {
  console.log("Y is greater than X");
}

// EXERCISE 2
let newDog = "Chihuahua";
// Check and display how many letters are in newDog.
console.log(`The dog's name has ${newDog.length} letters.`);
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// let uppercase = newDog.toUpperCase;
// let lowercase = newDog.toLowerCase;
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
// Check if the variable newDog is equal to “Chihuahua”
if (newDog === "Chihuahua") {
  console.log("I love Chihuahas, it's my favorite dog breed");
} else {
  console.log(" I don't care, I prefer cat's");
}

// EXERCICE 3
const userNumber = prompt("Please put a number");
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
if (userNumber % 2 === 0) {
  console.log(userNumber + "is an even number");
} else {
  console.log(userNumber + "is an odd number");
}

// EXERCICE 4

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length) {
  case 0:
    console.log("No one is online");
    break;
  case 1:
    console.log(users[0] + " is online");
    break;
  case 2:
    console.log(users[0] + " and " + users[1] + " are online");
    break;
  default:
    console.log(
      users[0] +
        ", " +
        users[1] +
        ", and " +
        (users.length - 2) +
        " more are online"
    );
    break;
}
// using else if

if (users.length === 0) {
  console.log("No one is online");
} else if (users.length === 1) {
  console.log(users[0] + " is online");
} else if (users.length === 2) {
  console.log(users[0] + " and " + users[1] + " are online");
} else {
  console.log(
    users[0] +
      ", " +
      users[1] +
      ", and " +
      (users.length - 2) +
      " more are online"
  );
}
