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

router.get("/data/:id", (req, res, next) => {
  console.log("sky blue");
  Item.find({ _id: req.params.id }, (err, item) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      return res.status(200).send(item);
    }
  });
});

router.post("/data", (req, res, next) => {
  console.log("red");
  const newItem = new Item(req.body);
  newItem.save((err, item) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      return res.status(201).send(item);
    }
  });
});

router.put("/data/:id", (req, res, next) => {
  console.log("green");
  Item.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedItem);
      }
    }
  );
});

router.delete("/data/:id", (req, res, next) => {
  console.log("black");
  Item.findOneAndDelete({ _id: req.params.id }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      return res.status(200).send(`Successfully Deleted Item: ${deletedItem}`);
    }
  });
});

module.exports = router;
