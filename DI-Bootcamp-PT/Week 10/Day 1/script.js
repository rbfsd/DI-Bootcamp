// Synchronous programming

const makeBurger = () => {
  const meatType = getMeat();
  const bunsType = getBuns();
  const burger = putMeatBetwenBuns(bunsType, meatType);
  return burger;
};

function getMeat() {
  console.log("getting the beef from the butcher");
  return "beef";
}

function getBuns() {
  console.log("getting the buns from the bakery");
  return "whole grain";
}

function putMeatBetwenBuns(bunsType, meatType) {
  console.log(`creating the ${meatType} burger with ${bunsType} buns`);
  return "Delicious Burger";
}

const burger = makeBurger();
console.log(burger);

// We will receive in the console

// getting the beef from the butcher
// getting the buns from the bakery
// creating the beef burger with whole grain buns
// Delicious Burger

const makeBurger = () => {
  const meatType = getMeat();
  const bunsType = getBuns();
  const burger = putMeatBetwenBuns(bunsType, meatType);
  return burger;
};

function getMeat() {
  console.log("walking to the butcher...");
  setTimeout(() => {
    console.log("getting the beef from the butcher");
    return "beef";
  }, 2000);
}

function getBuns() {
  console.log("getting the buns from the bakery");
  return "whole grain";
}

function putMeatBetwenBuns(bunsType, meatType) {
  console.log(`creating the ${meatType} burger with ${bunsType} buns`);
  return "Delicious Burger";
}

const burger = makeBurger();
console.log(burger);

// output
// getting the buns from the bakery
// creating the undefined burger with whole grain buns
// Delicious Burger
// getting the beef from the butcher

// promises

// syntax:
let promise = new Promise(function (resolve, reject) {
  // executor
});

let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
  if (goodGrades) {
    resolve("I will get a gift");
  } else {
    reject("I won't get the gift");
  }
});
// endSemester
// Promise {<resolved>: "I will get a gift"}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: "I will get a gift"
