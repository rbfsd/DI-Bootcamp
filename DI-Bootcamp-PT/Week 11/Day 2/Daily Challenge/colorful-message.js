// colorful-message.js
import chalk from "chalk";

function generateColorfulMessage() {
  const colorfulMessage = chalk.bold.red("I wish you a very colorful day!");
  const warning = chalk.hex("#FFA500")("Warning!");

  console.log(colorfulMessage);
  console.log(warning);

  return colorfulMessage; // Returning the message for use in apps.js
}

export { generateColorfulMessage };
