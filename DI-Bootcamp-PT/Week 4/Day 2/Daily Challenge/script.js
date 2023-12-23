const userPrompt = prompt("pleasee neter few world separate by comma.");

const userArray = userPrompt.split(",");

// Console.log the words one per line, in a rectangular frame
userArray.forEach((word) => {
  console.log(`* ${word} *`);
});

const maxLength = Math.max(...userArray.map((word) => word.length));

const frame = "*".repeat(maxLength + 4); // 4 pour l'espacement supplémentaire

// Affiche les mots dans le cadre
console.log(frame);
console.log(
  wordsArray.map((word) => `* ${word.padEnd(maxLength, " ")} *`).join("\n")
);
console.log(frame);
