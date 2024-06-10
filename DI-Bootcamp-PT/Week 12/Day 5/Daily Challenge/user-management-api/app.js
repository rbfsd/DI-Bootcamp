const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Helper function to read and write user data
const readUsersFromFile = () => {
  const data = fs.readFileSync("users.json", "utf8");
  return JSON.parse(data);
};

const writeUsersToFile = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
};

// Routes
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const users = readUsersFromFile();
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    username,
    password: hashedPassword,
  };
  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();
  const user = users.find((user) => user.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  res.status(200).json({ message: "Login successful" });
});

app.get("/users", (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const users = readUsersFromFile();
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const users = readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (username) users[userIndex].username = username;
  if (password) users[userIndex].password = bcrypt.hashSync(password, 10);

  writeUsersToFile(users);
  res.json({ message: "User updated successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
