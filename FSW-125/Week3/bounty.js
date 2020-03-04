const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const bounties = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    isLiving: true,
    bountyAmount: 500,
    type: "Jedi", // (‘Sith’ or ‘Jedi’)
    _id: uuid.v4()
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    isLiving: false,
    bountyAmount: 250,
    type: "Sith", // (‘Sith’ or ‘Jedi’)
    _id: uuid.v4()
  }
];
// console.log(uuid);
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

  res.send(
    `Posted: ${newBounty.firstName} ${newBounty.lastName} is being hunted with ID of ${newBounty._id}`
  );
});
// app.listen(9000, () => {});
app.delete("/bounties/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const bounty = bounties.findIndex(bounty => bounty._id === id);
  res.send(`Deleted entry`);
  bounties.splice(bounty, 1);
});
app.put("/bounties/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const bounty = bounties.findIndex(bounty => bounty._id === id);
  const updatedBounty = Object.assign(bounties[bounty], req.body);
  res.send(updatedBounty);
});
app.listen(3030, () => {});
