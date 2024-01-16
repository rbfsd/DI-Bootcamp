// every function
// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

// ex1
/* <p><input type="number" id="ageToCheck" value="18"></p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p> */
const ages = [32, 33, 12, 40];
function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}
// Définit une fonction checkAge qui prend un âge en argument et renvoie true si cet âge est supérieur à la valeur saisie dans le champ de saisie.
function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAge);
}
// Définit une fonction myFunction qui utilise la méthode every() pour vérifier si tous les éléments du tableau ages satisfont la condition définie par la fonction checkAge. Le résultat est ensuite affiché dans le paragraphe avec l'ID "demo".

// ex2
const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "No" },
];

let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
  if (index === 0) {
    //si l'index de depart est 0 alors on renvoi true car il n'a pas d'element precedent avec qui comparers
    return true;
  } else {
    return el.answer === arr[index - 1].answer;
  }
}

----------------------------------------------------------

// include() methods

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// syntax: Array.includes(element,start)


// ternary operator

// Create a function to check the year given by the user
// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function checkYear {
    var userInput = prompt('put a year')

    var message = userInput > 2000
    ? 'you are in the 21th century' :
    'you are in the 20th century';

    alert(message);
}


// arrow function and ternary operator
// Étape 1: Créer la fonction calculate en utilisant une flèche et l'opérateur ternaire
const calculate = (num1, num2, operator) => {
    // Étape 2: Utiliser l'opérateur ternaire pour effectuer le calcul en fonction de l'opérateur
    const result =
      operator === "+"
        ? num1 + num2
        : operator === "-"
        ? num1 - num2
        : operator === "*"
        ? num1 * num2
        : "Invalid operator";
  
    // Étape 3: Retourner le résultat
    return result;
  };
  
  // Étape 4: Tester la fonction avec différents exemples
  console.log(calculate(5, 3, "+")); // Devrait afficher 8
  console.log(calculate(10, 4, "-")); // Devrait afficher 6
  console.log(calculate(2, 6, "*")); // Devrait afficher 12
  console.log(calculate(8, 2, "/")); // Devrait afficher "Invalid operator"
  


// foreach function

const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
}); 

//2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]


// ex1
const numbers = [10,11,12,15,20];

// Using the for each method, display only the even numbers in the array
numbers.forEach(num =>{
    if (num % 2 === 0){
        console.log(`${num} is an even number`)
        }
        })


//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { return (value%2 == 0); });
//output : true 
//because there is at least one even number in the array

//2nd example
myArr.some((value)=> { return (value < 0); });
//output: false 
//because there is no negative number in the array

//If the arrow function is only returning a value you don't need the return keyword
//If the arrow function takes only one parameter you can omit the parentheses
myArr.some(value => value < 0 );
//output: false 
//because there is no negative number in the array

//3rd example
function isEven(x) {
  console.log(x) 
  return (x % 2 == 0);
}

myArr.some((value) => isEven(value));
//output : 1 2 true
//stops iterating as soon as an even number is found 

// ex1
const words = ["wow", "hey", "bye"];

const startsWithH = words.some((word) => word.startsWith('h'));

console.log(startsWithH); // Output: true