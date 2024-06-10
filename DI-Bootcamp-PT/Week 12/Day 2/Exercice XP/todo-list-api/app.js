// app.js
const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");

app.use(express.json()); // For parsing application/json
app.use("/todos", todosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
