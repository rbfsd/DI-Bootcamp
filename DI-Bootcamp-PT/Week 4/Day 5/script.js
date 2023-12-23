function playTheGame() {
  let userResponse = confirm("Would you like to play the game.");

  if (userResponse) {
    let userNumber = prompt("Please enter a number between 0 and 10");

    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      alert("Sorry, not a number or not in the specified range. Goodbye");
    } else {
      let computerNum = computerNumber();
      compareNumbers(parseInt(userNumber), computerNum);
    }
  } else {
    alert("No problem, Goodbye.");
  }

  function computerNumber() {
    return Math.floor(Math.random() * 11);
  }
}

function compareNumbers(userNumber, computerNumber) {
  let attempts = 0;

  while (attempts < 3) {
    if (userNumber === computerNumber) {
      alert("WINNER!");
      return;
    } else if (userNumber > computerNumber) {
      userNumber = prompt(
        "Your number is bigger than the computer's. Guess again."
      );
    } else {
      userNumber = prompt(
        "Your number is smaller than the computer's. Guess again."
      );
    }
    attempts++;
  }

  alert("Out of chances. Goodbye.");
}

// Call the playTheGame function to start the game
playTheGame();
