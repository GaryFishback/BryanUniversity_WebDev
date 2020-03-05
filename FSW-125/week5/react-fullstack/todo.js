const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const todos = require("./data");
app.get("/todos", (req, res) => {
  res.send({ todos });
});
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const todo = todos.find(todo => todo._id === id);
  res.send(todo);
});
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuid.v4();
  todos.push(newTodo);

  res.send(`Posted: Your new todo has been added to the list of todos`);
});
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const todo = todos.findIndex(todo => todo._id === id);
  const updatedtodo = Object.assign(todos[todo], req.body);
  res.send(updatedtodo);
});
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const todo = todos.findIndex(todo => todo._id === id);
  res.send(`Deleted entry`);
  todos.splice(todo, 1);
});

app.listen(3030, () => {});
