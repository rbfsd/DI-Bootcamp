// app.js
const readline = require("readline");
const {
  addTask,
  editTask,
  toggleTaskCompletion,
  filterTasks,
} = require("./taskmanager");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayTasks(taskList) {
  console.log("\nTasks:");
  taskList.forEach((task) => {
    console.log(`[${task.completed ? "X" : " "}] ${task.text}`);
  });
}

function promptAddTask() {
  rl.question("Enter task: ", (taskText) => {
    addTask(taskText);
    displayTasks(filterTasks());
    promptMenu();
  });
}

function promptEditTask() {
  rl.question("Enter task ID to edit: ", (taskId) => {
    rl.question("Enter new task text: ", (newText) => {
      editTask(Number(taskId), newText);
      displayTasks(filterTasks());
      promptMenu();
    });
  });
}

function promptToggleTask() {
  rl.question("Enter task ID to toggle completion: ", (taskId) => {
    toggleTaskCompletion(Number(taskId));
    displayTasks(filterTasks());
    promptMenu();
  });
}

function promptFilterTasks() {
  rl.question("Enter filter (all/completed/active): ", (filterType) => {
    displayTasks(filterTasks(filterType));
    promptMenu();
  });
}

function promptMenu() {
  console.log("\nMenu:");
  console.log("1. Add Task");
  console.log("2. Edit Task");
  console.log("3. Toggle Task Completion");
  console.log("4. Filter Tasks");
  console.log("5. Exit");
  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        promptAddTask();
        break;
      case "2":
        promptEditTask();
        break;
      case "3":
        promptToggleTask();
        break;
      case "4":
        promptFilterTasks();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid option. Please choose again.");
        promptMenu();
        break;
    }
  });
}

console.log("Welcome to Enhanced Task Manager!");
promptMenu();
