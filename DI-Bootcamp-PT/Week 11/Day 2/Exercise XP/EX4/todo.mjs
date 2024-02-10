export class TodoList {
  constructor() {
    this.tasks = []; // Corrected from this.task to this.tasks
  }

  addTask(task) {
    this.tasks.push({ task, done: false });
  }

  markTaskAsComplete(task) {
    const foundTask = this.tasks.find((t) => t.task === task);
    if (foundTask) {
      foundTask.done = true; // Corrected from completed to done
    }
  }

  listAllTask() {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.task} - ${task.done ? "Completed" : "Incomplete"}`
      );
    });
  }
}
