// challenge.js
const greet = require("../greeting");
const displayMessage = require("../colorful-message");
const readAndDisplayContent = require("./read-file");

// Greet the user
greet("User");

// Display a colorful message
displayMessage("This is a colorful message!", "blue");

// Read and display the content of the file
readAndDisplayContent();
