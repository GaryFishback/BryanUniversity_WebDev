const uuid = require("uuid");

const inventoryItems = [
  { name: "banana", type: "food", price: 200, _id: uuid.v4() },
  { name: "flour", type: "food", price: 100, _id: uuid.v4() },
  { name: "soup", type: "food", price: 200, _id: uuid.v4() },
  { name: "pants", type: "clothing", price: 2500, _id: uuid.v4() },
  { name: "shirt", type: "clothing", price: 800, _id: uuid.v4() },
  { name: "basket ball", type: "toy", price: 1000, _id: uuid.v4() },
  { name: "robot", type: "toy", price: 1500, _id: uuid.v4() },
  { name: "watermelon", type: "food", price: 1800, _id: uuid.v4() }
];
module.exports = inventoryItems;
