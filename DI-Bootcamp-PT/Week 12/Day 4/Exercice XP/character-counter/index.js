const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Type something and press Enter. Type 'exit' to quit.");

rl.on("line", (input) => {
  if (input.toLowerCase() === "exit") {
    rl.close();
  } else {
    console.log(`Character Count: ${input.length}`);
  }
});

rl.on("close", () => {
  console.log("Exiting...");
  process.exit(0);
});
