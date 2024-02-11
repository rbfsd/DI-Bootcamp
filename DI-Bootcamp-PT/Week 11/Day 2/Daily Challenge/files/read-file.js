// read-file.js
const fs = require("fs");

function readAndDisplayContent() {
  fs.readFile("file-data.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File content:", data);
  });
}

// Export the function to be used in other modules
module.exports = readAndDisplayContent;
