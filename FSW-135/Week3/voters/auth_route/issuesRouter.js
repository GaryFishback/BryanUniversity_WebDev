const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue");
const Comment = require("../models/comment");

//get issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return issues == "" //is 2 equal signs in purpose
      ? res.status(200).send("Nothing found in the records")
      : res.status(200).send(issues);
  });
});

//add New ISSUE
issueRouter.post("/:userID", (req, res, next) => {
  console.log(req.params);
  req.body.userID = req.params.userID;
  req.body.date = new Date();
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

//Get Issues by User
issueRouter.get("/user/:userID", (req, res, next) => {
  console.log(req.params.userID);
  Issue.find({ userID: req.params.userID }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return issues == "" //is 2 equal signs in purpose
      ? res.status(404).send("Nothing found in the records")
      : res.status(200).send(issues);
  });
});

//Get Issue by ID
issueRouter.get("/:issueID", (req, res, next) => {
  Issue.find({ _id: req.params.issueID }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return issues == "" //is 2 equal signs in purpose
      ? res.status(404).send("Nothing found in the records")
      : res.status(200).send(issues);
  });
});

//update issue info
issueRouter.put("/:issueID", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueID },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedIssue);
      }
    }
  );
});

//upvote
issueRouter.put("/:issueID/:userID/upvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueID },
    {
      $inc: {
        upVotes: 1,
      },
      $push: {
        voters: { userID: req.params.userID, voted: "upvoted" },
      },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedIssue);
      }
    }
  );
});
// downvote
issueRouter.put("/:issueID/:userID/downvote", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueID },
    {
      $inc: {
        downVotes: 1,
      },
      $push: {
        voters: { userID: req.params.userID, voted: "downvoted" },
      },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedIssue);
      }
    }
  );
});

issueRouter.delete("/:issueID", (req, res, next) => {
  Issue.findOneAndDelete({ _id: req.params.issueID }, (err, deletedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    } else {
      return res
        .status(200)
        .send(`Successfully Deleted Issue: ${deletedIssue}`);
    }
  });
});

module.exports = issueRouter;
