const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

const usernamesWithExcllamation = [];

gameInfo.forEach((player) => {
  const modifieUsername = player.username + "!";
  usernamesWithExcllamation.push(modifieUsername);
});

console.log(usernamesWithExcllamation);

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
let userscoreHigh = [];

gameInfo.forEach((bScore) => {
  if (bScore.score > 5) {
    userscoreHigh.push(bScore.username);
  }
});

console.log(userscoreHigh);

// Find and display the total score of the users. (Hint: The total score is 71)

let totalScore = 0;

gameInfo.forEach((player) => {
  totalScore += player.score;
});

console.log("the total score is: " + totalScore);
