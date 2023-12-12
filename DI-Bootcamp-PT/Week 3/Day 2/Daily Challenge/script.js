// exercise 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
fruits.shift();
// Sort the array in alphabetical order.
fruits.sort();
// Add “Kiwi” to the end of the array.
fruits.push("kiwi");
console.log(fruits);
// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0, 1);
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();

// exercise 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// acces
const oranges = moreFruits[1][1][0];
console.log(oranges);
