//exercice 1

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i] + " is divisible by 3: true");
  } else {
    console.log(numbers[i] + " is divisible by 3: false");
  }
}

// Exercise 2 : Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let userName = prompt("what is your name ?");

if (userName in guestList) {
  console.log(
    "Hi I am " + userName + ", and I am from: " + guestList[studentName]
  );
} else {
  console.log("hi I am a guest");
}

//   Exercise 3 : Playing With Numbers

let age = [20, 5, 12, 43, 98, 55];
// Console.log the sum of all the numbers in the age array.
let sum = 0;
for (i = 0; i < age.length; i++) {
  //   console.log((sum += age[i]));
  sum = sum + age[i];
}

let age = [20, 5, 12, 43, 98, 55];
let maxAge = age[0]; // On commence avec le premier âge comme le plus grand

// On utilise une boucle pour comparer chaque âge
for (let i = 1; i < age.length; i++) {
  // Si l'âge actuel est plus grand que notre maxAge actuel
  if (age[i] > maxAge) {
    // On met cet âge comme le nouveau maxAge
    maxAge = age[i];
  }
}

// On affiche le plus grand âge
console.log("Le plus grand âge est : " + maxAge);
