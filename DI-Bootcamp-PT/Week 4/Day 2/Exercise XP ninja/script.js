// Exercise 1: Random Number

// Get a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 2: Capitalized Letters

function capitalize(str) {
  let resultEven = "";
  let resultOdd = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      resultEven += str[i].toUpperCase();
      resultOdd += str[i].toLowerCase();
    } else {
      resultEven += str[i].toLowerCase();
      resultOdd += str[i].toUpperCase();
    }
  }

  return [resultEven, resultOdd];
}

// Exemple d'utilisation :
const result = capitalize("abcdef");
console.log(result); // ['AbCdEf', 'aBcDeF']

// Exercise 3 : Is Palindrome?
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

//   Exercise 4 : Biggest Number
function largestOfFour(arr) {
  var largestNumber = [0, 0, 0, 0];
  for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for (
      var subArrayIndex = 0;
      subArrayIndex < arr[arrayIndex].length;
      subArrayIndex++
    ) {
      if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
      }
    }
  }
  return largestNumber;
}

// Exercise 5: Unique Elements

// Write a JS function that takes an array and returns a new array with only unique elements.
let outputArray = [];

function uremovewithfilter(arr) {
  let outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
  });

  return outputArray;
}

console.log(uremovewithfilter(Arr));

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr));
