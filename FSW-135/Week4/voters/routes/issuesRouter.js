const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue");
const User = require("../models/user");
emptyHandler = (found, res) => {
  !found.length //is 2 equal signs in purpose
    ? res.status(204).send()
    : res.status(200).send(found);
};

//get issues
issueRouter.get("/", (req, res, next) => {
  console.log(req.user);
  Issue.find((err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    // console.log(issues);
    return emptyHandler(issues, res);
  });
});

//add New ISSUE
issueRouter.post("/", (req, res, next) => {
  console.log(req.body);
  req.body.userID = req.user._id;
  req.body.date = new Date();
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });

  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $push: {
        issues: { issue: req.body, date: req.body.date },
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedUser);
      }
    }
  );
});

//Get Issues by User
issueRouter.get("/user/", (req, res, next) => {
  console.log(req.user._id);
  Issue.find({ userID: req.user._id }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return emptyHandler(issues, res);
  });
});

//Get Issue by ID
issueRouter.get("/:issueID", (req, res, next) => {
  Issue.find({ _id: req.params.issueID }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return emptyHandler(issues, res);
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
        voters: { userID: req.user._id, voted: "upvoted" },
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
        voters: { userID: req.user._id, voted: "downvoted" },
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
