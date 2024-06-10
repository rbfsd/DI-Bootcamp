const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const quizRouter = require("./routes/quiz");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "trivia-quiz", resave: false, saveUninitialized: true })
);

// Hard-coded trivia questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Make trivia questions available to the routes
app.locals.triviaQuestions = triviaQuestions;

// Use the quiz router
app.use("/quiz", quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
