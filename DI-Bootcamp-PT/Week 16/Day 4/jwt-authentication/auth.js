const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = []; // Replace with a database in production

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.status(400).send("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword };
  users.push(user);
  const accessToken = jwt.sign({ username }, "accessSecret", {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ username }, "refreshSecret", {
    expiresIn: "7d",
  });
  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.json({ message: "Registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send("Invalid credentials");
  }
  const accessToken = jwt.sign({ username }, "accessSecret", {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ username }, "refreshSecret", {
    expiresIn: "7d",
  });
  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.json({ message: "Logged in successfully" });
});

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.sendStatus(401);
  }
  jwt.verify(refreshToken, "refreshSecret", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = jwt.sign({ username: user.username }, "accessSecret", {
      expiresIn: "15m",
    });
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.json({ message: "Token refreshed successfully" });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
