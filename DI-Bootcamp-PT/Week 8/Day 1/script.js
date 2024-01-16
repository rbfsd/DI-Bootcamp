/**
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this
exercise (but not y).
The input string will only consist of lower case letters
and/or spaces.

"The input string will only consist of lower case letters and"
 */

// function countVowels(text) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   for (let char of text) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels());
// function x(a,b){
//     return a+b;
// }

// const x1 = function (a,b){
//     return a+b;
// }

// nested function

function x() {
  function y() {
    console.log("hello");
  }
  return y;
}
