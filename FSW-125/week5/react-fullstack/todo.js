const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const bounties = require("./data");
app.get("/bounties", (req, res) => {
  res.send({ bounties });
});
app.get("/bounties/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const bounty = bounties.find(bounty => bounty._id === id);
  res.send(bounty);
});
app.post("/bounties", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuid.v4();
  bounties.push(newBounty);

  res.send(`Posted: Your new bounty has been added to the list of bounties`);
});
app.put("/bounties/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const bounty = bounties.findIndex(bounty => bounty._id === id);
  const updatedbounty = Object.assign(bounties[bounty], req.body);
  res.send(updatedbounty);
});
app.delete("/bounties/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const bounty = bounties.findIndex(bounty => bounty._id === id);
  res.send(`Deleted entry`);
  bounties.splice(bounty, 1);
});

app.listen(3030, () => {});
