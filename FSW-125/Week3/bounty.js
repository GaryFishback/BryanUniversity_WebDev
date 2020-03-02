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
    type: "Jedi" // (‘Sith’ or ‘Jedi’)
    // _id: uuid()
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    isLiving: false,
    bountyAmount: 250,
    type: "Sith" // (‘Sith’ or ‘Jedi’)
    // _id: uuid()
  }
];
app.get("/bounties", (req, res) => {
  res.send({ bounties });
  //   console.log(uuid);
});
app.post("/bounties", (req, res) => {
  const newBounty = req.body;
  //   newBounty._id = uuid();
  bounties.push(newBounty);

  res.send(
    `Posted: ${newBounty.firstName} ${newBounty.lastName} is being hunted with ID of ${newBounty._id}`
  );
});
// app.listen(9000, () => {});

app.listen(3030, () => {});
