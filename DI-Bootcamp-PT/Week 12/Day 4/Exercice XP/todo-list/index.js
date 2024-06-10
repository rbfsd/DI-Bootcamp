const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let todos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Todo List</h1>
        <form action="/add" method="POST">
          <input type="text" name="text" placeholder="Add a new todo" required>
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          ${todos
            .map(
              (todo) => `
            <li>
              ${todo.text}
              <form action="/remove" method="POST" style="display:inline;">
                <input type="hidden" name="id" value="${todo.id}">
                <button type="submit">Remove</button>
              </form>
            </li>
          `
            )
            .join("")}
        </ul>
      </body>
    </html>
  `);
});

app.post("/add", (req, res) => {
  const newTodo = {
    id: Date.now().toString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.redirect("/");
});

app.post("/remove", (req, res) => {
  const todoId = req.body.id;
  todos = todos.filter((todo) => todo.id !== todoId);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
