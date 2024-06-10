// routes/quiz.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { triviaQuestions } = req.app.locals;
  req.session.currentQuestionIndex = 0;
  req.session.score = 0;
  res.send(
    `<h1>${triviaQuestions[0].question}</h1><form method="POST"><input type="text" name="answer"/><button type="submit">Submit</button></form>`
  );
});

router.post("/", (req, res) => {
  const { triviaQuestions } = req.app.locals;
  const currentQuestionIndex = req.session.currentQuestionIndex;
  const userAnswer = req.body.answer.trim();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    req.session.score += 1;
  }

  req.session.currentQuestionIndex += 1;

  if (req.session.currentQuestionIndex < triviaQuestions.length) {
    const nextQuestion = triviaQuestions[req.session.currentQuestionIndex];
    res.send(
      `<h1>${nextQuestion.question}</h1><form method="POST"><input type="text" name="answer"/><button type="submit">Submit</button></form>`
    );
  } else {
    res.redirect("/quiz/score");
  }
});

router.get("/score", (req, res) => {
  const score = req.session.score;
  res.send(`<h1>Your final score is ${score}</h1>`);
});

module.exports = router;
