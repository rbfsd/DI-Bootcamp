// Exercise 1

//Part 1 /Function with no parameter

// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
  // The function should console.log a sentence about you
  console.log("I am Raphael a 24 years old fullstack developer");
}
// Call the function.
infoAboutMe();

// Part 2 /Function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
  console.log(
    "My name is: " +
      personName +
      ", I'am " +
      personAge +
      "years old. My favorite color is: " +
      personFavoriteColor
  );
}
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//Exercice 2
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
function calculateTip() {
  // Inside the function, use prompt to ask John for the amount of the bill.
  const amount = Number(prompt("What is the amount of the bill ?"));
  let tipPercent;
  // If the bill is less than $50, tip 20%.
  // If the bill is between $50 and $200, tip 15%.
  // If the bill is more than $200, tip 10%.
  if (amount < 50) tipPercent = 0.2;
  if (amount > 50 && amount < 200) tipPercent = 0.15;
  if (amount > 200) tipPercent = 0.1;

  const totalBill = amount * (1 + tipPercent);
  console.log("bill: ", amount);
  console.log("total tip including bill is  :", totalBill);
}

calculateTip();

// exercice 3

// Create a function call isDivisible() that takes no parameter.
function isDivisible(divisor) {
  // In the function, loop through numbers 0 to 500.
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    // Console.log all the numbers divisible by 23.
    if (i % 23 === 0) {
      console.log(i);
      sum = sum + i;
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
  }
  console.log("the sums of number devisible by 23 is: ", sum);
}

// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and the

// exercice 4

// Add the stock and prices objects to your js file.
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// Create an array called shoppingList with the following items:

const shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
function myBill() {
  let total = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];

    // Vérifier si l'article est en stock
    if (item in stock && stock[item] > 0) {
      // Ajouter le prix au total
      total += prices[item];

      // Réduire le stock de 1
      stock[item]--;
    } else {
      console.log(item + " is out of stock.");
    }
  }

  return total;
}

// Exercice 5

function changeEnough(itemPrice, amountOfChange) {
  //initialize sum as 0
  let sum = 0;

  // Update sum with each value from the array

  sum += amountOfChange[0] * 0.25;
  sum += amountOfChange[1] * 0.1;
  sum += amountOfChange[2] * 0.05;
  sum += amountOfChange[3] * 0.01;

  if (sumOfChange >= itemPrice) {
    return true;
  } else if (sumOfChange < itemPrice) {
    return false;
  }
}

changeEnough(4.25, [25, 20, 5, 0]);

// Exercise 6

// Let’s create functions that calculate your vacation’s costs:
function vocationCost() {}

function hotelCost() {
  let numberOfNifght;

  while (true) {
    let userInput = prompt("How many nights would you lmike tp stay ?");

    if (userInput === null || isNaN(userInput)) {
      alert("Please enter a valid number!");
    } else {
      numberOfNifght = Number(userInput);
      break;
    }
  }
  const costPerNight = 140;
  const totalCost = numberOfNifght * costPerNight;

  return totalCost;
}

function planeRideCost() {
  let destination;

  while (true) {
    let destinationInput = prompt("where do you want to travel ?");

    if (destinationInput === null || typeof destinationInput !== "string") {
      alert("Please enter a valid location !");
    } else {
      destination = destinationInput.trim().toLowerCase();
      break;
    }
  }

  let cost;
  switch (destination) {
    case "london":
      cost = 183;
      break;
    case "paris":
      cost = 220;
      break;
    default:
      cost = 300;
  }

  return cost;
}

function rentalcarCost() {
  let numberOfNDay;

  while (true) {
    let carDayInput = prompt("How many nights would you lmike tp stay ?");

    if (carDayInput === null || isNaN(carDayInput)) {
      alert("Please enter a valid number!");
    } else {
      numberOfDay = Number(carDayInput);
      break;
    }
  }
  const costPerDay = 40;
  const totalCarCost = numberOfDay * costPerDay;

  return totalCarCost;
}

function totalVacationCost() {
  // Call the three functions to get the individual costs
  const carCost = rentalcarCost(); // Fix typo in the function name
  const hotelCostValue = hotelCost(); // Rename variable to avoid conflict with function name
  const planeCost = planeRideCost();

  // Calculate the total cost by summing up the individual costs
  const totalCost = carCost + hotelCostValue + planeCost; // Rename variable to avoid conflict with function name

  return totalCost;
}
