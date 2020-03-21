const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const data = require("./data");

//get all
app.get("/data", (req, res) => {
  res.send({ data });
});

//get one
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const item = data.find(item => item._id === id);
  res.send(item);
});

app.get("/data/search/type", (req, res, next) => {
  const query = req.query.type;
  console.log(query);
  const item = data.filter(item => item.type === query);
  res.send(item);
});

app.get("/data/search/name", (req, res) => {
  const query = req.query.name;
  console.log(query);
  const item = data.filter(item => item.name === query);
  res.send(item);
});

app.get("/data/search/price", (req, res) => {
  const query = Number(req.query.price);
  console.log(query);
  const item = data.filter(item => item.price === query);
  res.send(item);
});
app.listen(3030, () => {});
