// Display current date
const currentDate = new Date().toDateString();
document.getElementById('date').innerText = currentDate;

// Function to add a new task
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskName = prompt('Enter task name:');
  const taskTime = prompt('Enter time taken for the task:');

  if (taskName && taskTime) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    const taskDetails = document.createElement('div');
    taskDetails.innerHTML = `
      <span>${taskName}</span>
      <span>${taskTime}</span>
    `;

    const checkButton = document.createElement('button');
    checkButton.innerText = 'Check';
    checkButton.addEventListener('click', () => {
      // Perform action when 'Check' button is clicked (optional)
      alert(`Task: ${taskName} completed!`);
    });

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(checkButton);
    taskList.appendChild(taskItem);
  }
});

