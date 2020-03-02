const express = require("express");
const app = express();
// const uuid = require("uuid/v4");
//I got errors about uuid's function to be deprecated.
//Until i figure this out date.now is the only thing i can think of to be unique enough to be an id.
app.use(express.json());
const bounties = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    isLiving: true,
    bountyAmount: 500,
    type: "Jedi", // (‘Sith’ or ‘Jedi’)
    _id: Date.now()
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    isLiving: false,
    bountyAmount: 250,
    type: "Sith", // (‘Sith’ or ‘Jedi’)
    _id: Date.now() + Math.floor(Math.random() * 1000)
  }
];
// console.log(uuid);
app.get("/bounties", (req, res) => {
  res.send({ bounties });
});
app.post("/bounties", (req, res) => {
  const newBounty = req.body;
  newBounty._id = Date.now();
  bounties.push(newBounty);

  res.send(
    `Posted: ${newBounty.firstName} ${newBounty.lastName} is being hunted with ID of ${newBounty._id}`
  );
});
// app.listen(9000, () => {});

app.listen(3030, () => {});
