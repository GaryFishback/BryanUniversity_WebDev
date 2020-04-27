const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment");

//get comments
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return comments == "" //is 2 equal signs in purpose
      ? res.status(200).send("Nothing found in the records")
      : res.status(200).send(comments);
  });
});

//add New Comment
commentRouter.post("/:issueID/:userID", (req, res, next) => {
  console.log(req.params);
  req.body.userID = req.params.userID;
  req.body.issueID = req.params.issueID;
  console.log(req.body);
  req.body.date = new Date();
  const newComment = new Comment(req.body);
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});

//Get Comments by Issue
commentRouter.get("/issue/:issueID", (req, res, next) => {
  Comment.find({ issueID: req.params.issueID }, (err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return comments == "" //is 2 equal signs in purpose
      ? res.status(404).send("Nothing found in the records")
      : res.status(200).send(comments);
  });
});

//Get Comments by User
commentRouter.get("/user/:userID", (req, res, next) => {
  Comment.find({ userID: req.params.userID }, (err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return comments == "" //is 2 equal signs in purpose
      ? res.status(404).send("Nothing found in the records")
      : res.status(200).send(comments);
  });
});

//Get Comment by ID
commentRouter.get("/:commentID", (req, res, next) => {
  Comment.find({ _id: req.params.commentID }, (err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return comments == "" //is 2 equal signs in purpose
      ? res.status(404).send("Nothing found in the records")
      : res.status(200).send(comments);
  });
});

//update comment info
commentRouter.put("/:commentID", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentID },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res.status(201).send(updatedComment);
      }
    }
  );
});

commentRouter.delete("/:commentID", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentID },
    (err, deletedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      } else {
        return res
          .status(200)
          .send(`Successfully Deleted Comment: ${deletedComment}`);
      }
    }
  );
});

module.exports = commentRouter;
