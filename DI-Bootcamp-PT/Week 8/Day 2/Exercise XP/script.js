// ex1
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const func = (a, b) => a + b;

//  Exercise 2 : Kg And Grams
function weightReturnInGrams(kilograms) {
  return kilograms * 1000;
}
// invoke function
console.log(weightReturnInGrams(2));
// Function Declaration is hoisted, meaning you can invoke it before its declaration.
// Function Expression is not hoisted, so you can only invoke it after its declaration.

// one line arrow function
const weightOneLineArrowFunc = (kg) => kg * 1000;
// invoke the function
console.log(weightOneLineArrowFunc(5));

// Exercise 3 : Fortune Teller
(function () {
  function fortuneTeller(childrens, partnersName, location, job) {
    // display in the DOM a sentence
    var message =
      "You will be a " +
      job +
      " in " +
      location +
      ", and married to " +
      partnersName +
      " with " +
      childrens +
      " kids";

    console.log(message);
  }
  fortuneTeller(4, "Johana", "Jerusalem", "Developer");
})();

// eexercice 4: Welcome

(function () {
  function createUserProfile(userName, userPic) {
    // wrote your code there
    var userProfileDiv = document.createElement("div");
    userProfileDiv.className = "nav-item";

    var imgElement = document.createElement("img");
    imgElement.src = userPic;
    imgElement.alt = "profile picture";
    imgElement.className = "rounded-circle";
    imgElement.style.width = "30px";

    var userNameSpan = document.createElement("span");
    userNameSpan.className = "ml-2";
    userNameSpan.textContent = userName;

    userProfileDiv.appendChild(imgElement);
    userProfileDiv.appendChild(userNameSpan);

    document.getElementById("userProfileContainer").appendChild(userProfileDiv);
  }

  createUserProfile("John Doe", "https://via.placeholder.com/150");
});

// ex5 : Juice Bar
// part 1

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
function makeJuice(sizeDrinks) {
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    var message =
      "The clients wants a " +
      sizeDrinks +
      " juice, containing " +
      ingredient1 +
      "," +
      ingredient2 +
      "," +
      ingredient3 +
      ".";
  }
  addIngredients("pomme", "poire", "banana");
}

makeJuice(big);

// Part 2

function makeJuice(drinkSize) {
  // Array of ingredients
  let ingredients = [];

  // Inner function addIngredients
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  // Inner function displayJuice
  function displayJuice() {
    var message =
      "The client wants a " +
      drinkSize +
      " juice, containing " +
      ingredients.join(", ") +
      ".";
    console.log(message);
  }

  // Invoke the addIngredients function twice
  addIngredients("apple", "orange", "banana");
  addIngredients("strawberry", "kiwi", "pineapple");

  // Invoke the displayJuice function once
  displayJuice();
}

// Invoke the makeJuice function in the global scope
makeJuice("large");
