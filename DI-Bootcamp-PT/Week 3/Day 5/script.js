//Comparing
// console.log(Boolean(1 === "1"));

// console.log(Boolean(1 !== "1"));

// console.log(Boolean(1 === 1 && 1 === 2));

// console.log(Boolean(1 !==2 || 1 === 1));

//Working With Numbers
// let x = 1;
// let y = 2;
// x++;
// x--;
// console.log(x);

// x += y;

// console.log(x);

//Conditionals :)

//If true we will console.log
// let age = 20;

// if (age > 18) {
//   console.log("You are a big human");
// }

//If false we will do nothing

// let age = 18;

// if (age > 18) {
//   console.log("You are a big human");
// }

//If...Else

// let age = 18;

// if (age > 18) {
//   console.log("You are a big human");
// } else {
//   console.log("You are younger or equal to 18");
// }

//Else If....

// let age = "string";

// if (age > 18) {
//   console.log("You are a big human");
// } else if (age < 18) {
//   console.log("You are a small human");
// } else if (typeof age !== "number") {
//   console.log("Excuse me , thats not an age");
// } else {
//   console.log("You are a medium human");
// }

// let username = prompt("What is your username?");

// if (username == "Bob") {
//   console.log("Welcome Bob");
// } else if (username == "Sam") {
//   console.log("Welcome Sam");
// } else {
//   console.log("Welcome new user");
// }

//Switch Case

// let fruit ="Oranges";

// switch (fruit) {
//   case "Oranges":
//     console.log("Oranges are $0.59 per kilo");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and Papayas are $2.79 a kilo");
//     break;
//   default:
//     console.log("Sorry we are out of " + fruit);
// }

//(array)
// let colors=["red","blue","green"]

//Objects

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "Blue",
// };

// console.log("The persons name is " + person.firstName + " " + person.lastName);

// console.log(person["firstName"]);

//Adding/Changing/deleting Object Properties

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   children: {
//     eldest: "Sam",
//     middle: "Rivka",
//   },
//   favoriteFoods: ["pizza", "burgers", "totrillas"],
// };

// person.eyeColor = "blue";

// delete person.lastName;
// console.log(person);
// person.favoriteFoods[2] = "banana";

// console.log(person);

//Exercise 1 Objects

// let user = {
//   username: "Dani123",
//   password: "1234",
// };

// let user1 = {
//   username: "321dani",
//   password: "1234",
// };

// let database = [user, user1];

// console.log(database[0].username);
// console.log(database[1].username);

// let newsfeed = [
//   { username: "DANI", timeline: "1997-2023" },
//   { username: "sarah", timeline: "1997-2023" },
//   { username: "greg", timeline: "1997-2023" },
// ];

// console.log(newsfeed);
// console.log(newsfeed[0].username);
// console.log(newsfeed[1].username);
// console.log(newsfeed[2].username);

// For loop to iterate from 0 to 15
for (let i = 0; i <= 15; i++) {
  // Check if the current number is even or odd
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

let names = ["john", "sarah", 23, "Rudolf", 34];

console.log("Partie 1 :");
for (let i = 0; i < names.length; i++) {
  // Vérifier si l'élément n'est pas une chaîne
  if (typeof names[i] !== "string") {
    continue; // Passer à l'itération suivante si ce n'est pas une chaîne
  }

  // Vérifier si la première lettre est en majuscule
  if (names[i][0] !== names[i][0].toUpperCase()) {
    // Mettre la première lettre en majuscule
    names[i] = names[i][0].toUpperCase() + names[i].slice(1);
  }

  // Afficher le nom
  console.log(names[i]);
}
console.log("\nPartie 2 :");
let j = 0;

do {
  // Vérifier si l'élément n'est pas une chaîne
  if (typeof names[j] !== "string") {
    break; // Sortir de la boucle si ce n'est pas une chaîne
  }

  // Afficher le nom
  console.log(names[j]);

  j++; // Incrémenter pour la prochaine itération
} while (j < names.length);
