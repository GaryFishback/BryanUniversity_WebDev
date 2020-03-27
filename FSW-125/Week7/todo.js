const express = require("express");
const app = express();
const uuid = require("uuid");
app.use(express.json());
const tweets = require("./Data/Tweets");
app.get("/tweets", (req, res) => {
  res.send({ tweets });
});
app.get("/tweets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.find(tweet => tweet._id === id);
  res.send(tweet);
});
app.post("/tweets", (req, res) => {
  const newTweet = req.body;
  newTweet._id = uuid.v4();
  tweets.push(newTweet);

  res.send(newTweet);
});
app.put("/tweets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.findIndex(tweet => tweet._id === id);
  const updatedtweet = Object.assign(tweets[tweet], req.body);
  res.send(updatedtweet);
});
app.delete("/tweets/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweet = tweets.findIndex(tweet => tweet._id === id);
  res.send(`Deleted entry`);
  tweets.splice(tweet, 1);
});

app.listen(3030, () => {});
