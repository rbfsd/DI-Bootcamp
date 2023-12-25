const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log(numbers.toString());

console.log(numbers.join("="));

console.log(numbers.sort());

function bblSort(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < numbers.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (numbers[j] > numbers[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  // Print the sorted array
  console.log(numbers);
}

bblSort(numbers);
