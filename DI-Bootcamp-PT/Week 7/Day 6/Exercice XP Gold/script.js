// Exercise 1: Sum Elements
// Write a JavaScript program to find the sum of all elements in an array.

function findSum(array) {
  let sum = 0;

  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

// example

const myArray = [1, 2, 3, 4, 5, 6];
const result = findSum(myArray);

console.log("the sum of all element is: ", result);

// Exercise 2 : Remove Duplicates
// Write a JavaScript program to remove duplicate items in an array.
function removeDuplicate(arr) {
  const uniqueArr = [];

  arr.forEach((element) => {
    if (uniqueArr.indexOf(element) === -1) {
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
}

// Exercise 3 : Remove Certain Values
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// [NaN, 0, 15, false, -22, "", undefined, 47, null];

function removeFalsyValues(arr) {
  const filteredArray = [];

  arr.forEach((element) => {
    if (
      element !== null &&
      element !== 0 &&
      element !== "" &&
      element !== false &&
      element !== undefined &&
      !isNaN(element)
    ) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
