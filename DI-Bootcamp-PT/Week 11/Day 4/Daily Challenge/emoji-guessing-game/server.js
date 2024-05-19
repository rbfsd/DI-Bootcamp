const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  // Add more emoji objects
];

let leaderboard = [];

// Helper function to shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Route to get a random emoji with options
app.get("/emoji", (req, res) => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = shuffle(
    emojis.map((e) => e.name).filter((name) => name !== randomEmoji.name)
  ).slice(0, 2);
  options.push(randomEmoji.name);
  res.json({ emoji: randomEmoji.emoji, options: shuffle(options) });
});

// Route to submit a guess
app.post("/guess", (req, res) => {
  const { emoji, guess } = req.body;
  const correctEmoji = emojis.find((e) => e.emoji === emoji);
  const isCorrect = correctEmoji.name === guess;

  res.json({ correct: isCorrect, correctName: correctEmoji.name });
});

// Route to get leaderboard
app.get("/leaderboard", (req, res) => {
  res.json(leaderboard);
});

// Route to submit score
app.post("/score", (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score });
  leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10); // Top 10 scores
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
