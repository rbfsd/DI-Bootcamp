const numberOfRows = 6;

console.log("Pattern using one loop:");

for (let i = 1; i <= numberOfRows; i++) {
  console.log("*".repeat(i));
}

console.log("\nPattern using two nested loops:");

for (let i = 1; i <= numberOfRows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern.trim());
}
