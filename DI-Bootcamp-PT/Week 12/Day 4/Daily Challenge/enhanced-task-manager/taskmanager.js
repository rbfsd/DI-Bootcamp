// taskManager.js
let tasks = [];

// Function to add a task
function addTask(taskText) {
  const task = { id: Date.now(), text: taskText, completed: false };
  tasks.push(task);
}

// Function to edit a task
function editTask(taskId, newText) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].text = newText;
  }
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
  }
}

// Function to filter tasks by completion status
function filterTasks(filterType) {
  switch (filterType) {
    case "completed":
      return tasks.filter((task) => task.completed);
    case "active":
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}

module.exports = {
  tasks,
  addTask,
  editTask,
  toggleTaskCompletion,
  filterTasks,
};
