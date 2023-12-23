// Defining/Declaring A Function
function fntName(){
    //statements
}
function drinkCoffee(){
    console.log("The user drinks coffee in the morning");
}

function myFunc(param1,param2, ..., paramN){
    //statement
}
function userInfo (username, userAge) {
    console.log("My name is " + username + ", my age is " + userAge);
}

// Calling/Invoking A Function
function calculus () {
    console.log(1+2);
}

calculus(); //3

// Arguments are the values passed to the parameters, when the function is executed.
function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is "  + userAge);
}

userInfo("Sarah", 22); //My name is Sarah, my age is 22
userInfo("Ben", 40); //My name is Ben, my age is 40

function calculusSecond (a,b,c) {
    console.log(a+b+c);
}

calculusSecond(2,3,1);//6

// Default Values
// If a parameter is not provided, then its value becomes undefined.

function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah");//My name is Sarah, my age is undefined

function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah"); //My name is Sarah, my age is 20
userInfo("Ben", 40); //My name is Ben, my age is 40

// Local Variables

A variable declared inside a function is only visible inside that function.

function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

// Global Variables

//global variable 
let eyeColor = "blue";

function userMoreInfo (userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
console.log(eyeColor); // blue

function favoriteColor () {
    console.log("My favorite color is " + eyeColor);
}

favoriteColor(); //My favorite color is blue


// exerice 1
// Write a Javascript function that takes a parameter: myAge
function calculateFamilyAge (myAge){
    // In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
    let mumAge = myAge * 2;
    let dadAge = mumAge * 1.2;

    console.log("My mum's age: " + mumAge + "years");
    console.log("My dad's age: " + dadAge + "years");
}
// Call the function. 
calculateFamilyAge(35);

// return

function userInfo(userName, userAge) {
    let result = "My name is " + userName + ", my age is " + userAge;
    return result;
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //My name is Sarah, my age is 22


function userInfo(userName, userAge) {
    if (userName === "Sarah") {
        let result = "Hey " + userName;
        return result;
    } else {
        return "You are not the right person";
    }
}

let girlInfo = userInfo("Sarah", 22);
console.log(girlInfo); //Hey Sarah

// The return statement stops the function execution immediately.

function userInfo(userName, userAge) {
    let result = "My name is " + userName + " my age is "  + userAge;
    return "hey";
    console.log(result); //not reached
}

let girlInfo = userInfo("Sarah", 22)
console.log(girlInfo) //hey


// exercise 2

function calculateMomAge (myAge) {
    var mumAge = myAge * 2 ;
    return mumAge ;
}

var myAge = 25;
var mumResultAge = calculateMomAge(myAge);

console.log("my mum's age is: " + mumResultAge);