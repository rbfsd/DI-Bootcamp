const tasks = [];

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  const taskId = tasks.length;
  const newTask = {
    task_id: taskId,
    text: taskText,
    done: false,
  };

  tasks.push(newTask);
  renderTask(newTask);
  taskInput.value = "";
}

function renderTask(task) {
  const listTasksDiv = document.querySelector(".listTasks");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.setAttribute("data-task-id", task.task_id);

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.addEventListener("click", () => doneTask(task.task_id));

  const taskLabel = document.createElement("span");
  taskLabel.className = "task-text";
  taskLabel.textContent = task.text;

  const deleteButton = document.createElement("i");
  deleteButton.className = "fas fa-times";
  deleteButton.addEventListener("click", () => deleteTask(task.task_id));

  taskDiv.appendChild(taskCheckbox);
  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(deleteButton);

  listTasksDiv.appendChild(taskDiv);
}

function doneTask(taskId) {
  const task = tasks.find((t) => t.task_id === taskId);
  task.done = !task.done;

  const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
  taskDiv.classList.toggle("done");
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
  tasks.splice(taskIndex, 1);

  const taskDiv = document.querySelector(`[data-task-id="${taskId}"]`);
  taskDiv.remove();
}
