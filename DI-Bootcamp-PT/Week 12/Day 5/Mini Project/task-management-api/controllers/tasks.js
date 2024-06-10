// controllers/tasks.js

const fs = require("fs");
const path = require("path");
const tasksFilePath = path.join(__dirname, "../data/tasks.json");

const getTasks = (req, res) => {
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(JSON.parse(data));
  });
};

const getTaskById = (req, res) => {
  const taskId = req.params.id;
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    const tasks = JSON.parse(data);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  });
};

const createTask = (req, res) => {
  const newTask = req.body;
  if (!newTask.title || !newTask.description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    const tasks = JSON.parse(data);
    newTask.id = Date.now().toString();
    tasks.push(newTask);
    fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(201).json(newTask);
    });
  });
};

const updateTask = (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  if (!updatedTask.title || !updatedTask.description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    let tasks = JSON.parse(data);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    tasks[taskIndex] = { id: taskId, ...updatedTask };
    fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ id: taskId, ...updatedTask });
    });
  });
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;
  fs.readFile(tasksFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    let tasks = JSON.parse(data);
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    if (filteredTasks.length === tasks.length) {
      return res.status(404).json({ error: "Task not found" });
    }
    fs.writeFile(tasksFilePath, JSON.stringify(filteredTasks), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ message: "Task deleted successfully" });
    });
  });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
