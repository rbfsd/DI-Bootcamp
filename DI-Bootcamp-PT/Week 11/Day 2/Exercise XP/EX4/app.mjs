// app.mjs
import { TodoList } from "./todo.mjs";

// Étape 6 : Créer une instance de la classe TodoList
const myTodoList = new TodoList();

// Étape 7 : Ajouter des tâches, en marquer certaines comme complétées et lister toutes les tâches
myTodoList.addTask("Acheter des courses");
myTodoList.addTask("Terminer les devoirs");
myTodoList.addTask("Faire de l'exercice");
myTodoList.markTaskAsComplete("Acheter des courses");

// Étape 8 : Lister toutes les tâches
myTodoList.listAllTask();
