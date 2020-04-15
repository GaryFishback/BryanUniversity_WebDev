const express = require("express");
const router = express.Router();
const Item = require("../models/inventory");

router.get("/data", (req, res, next) => {
  console.log("blue");
  Item.find((err, items) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      return res.status(200).send(items);
    }
  });
});

router.post("/data", (req, res, next) => {
  const newItem = new Item(req.body);
  newItem.save((err, items) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedItem);
  });
});
