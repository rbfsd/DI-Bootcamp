// routes/todos.js
const express = require("express");
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [];
let idCounter = 1;

// Get all to-do items
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post("/", (req, res) => {
  const newTodo = {
    id: idCounter++,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).send("To-do item not found");
  }
  todo.task = req.body.task !== undefined ? req.body.task : todo.task;
  todo.completed =
    req.body.completed !== undefined ? req.body.completed : todo.completed;
  res.json(todo);
});

// Delete a to-do item by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

module.exports = router;
