const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const tweets = require("./Data/Tweets");
app.get("/tweets", (req, res) => {
  res.status(200).send({ tweets });
});
app.get("/tweets/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.find(tweet => tweet._id === id);
  let error;
  console.log(tweet);
  if (!tweet) {
    res.status(404);
    next((error = new Error("Not Found ID in Database")));
  } else {
    res.status(200).send(tweet);
  }
});
app.post("/tweets", (req, res) => {
  const newTweet = req.body;
  console.log(req.body);
  newTweet._id = uuid.v4();
  tweets.push(newTweet);

  res.status(201).send(tweet);
});
app.put("/tweets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.findIndex(tweet => tweet._id === id);
  console.log(tweet);
  //the default error here was very descriptive on my opinion
  //it said ""Cannot convert undefined or null to object""
  const updatedtweet = Object.assign(tweets[tweet], req.body);

  res.status(201).send(updatedtweet);
});
app.delete("/tweets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.findIndex(tweet => tweet._id === id);
  console.log(tweet);
  res.status(200).send(`Deleted entry`);
  tweets.splice(tweet, 1);
});
app.get("/tweets/search/name", (req, res, next) => {
  const query = req.query.name;
  console.log(query);
  if (!query) {
    res.status(500);
    return next(
      new Error(
        "You must provide an author name query parameter. Try adding: ?name=Vyra"
      )
    );
  } else {
    tweet = tweets.filter(tweet => tweet.user.name === query);
    console.log(typeof tweet);
    if (!tweet || tweet.length === 0) {
      res.status(404);
      return next(new Error("The author name was not found"));
    } else {
      res.status(200).send(tweet);
    }
  }
});
app.use((err, req, res, next) => {
  console.log(err);
  console.log(res.statusCode);
  if (res.statusCode !== 404) {
    res.status(500);
  }
  return res.send({ errMsg: err.message });
});
app.listen(3030, () => {});
