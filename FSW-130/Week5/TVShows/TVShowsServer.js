const express = require("express");
const app = express();
const uuid = require("uuid");
const path = require("path");
app.use(express.json());
const tvShows = require("./data");
app.use("/tvShows", express.static(path.join(__dirname, "/")));
app.use("/tvShows", express.static(path.join(__dirname, "/tvShows.js")));
app.get("/tvShows", function(req, res) {
  res.sendFile(path.join(__dirname + "/tvShows.html"));
});
app.get("/tvshows", function(req, res) {
  res.sendFile(path.join(__dirname + "/tvShows.html"));
});
// console.log(__dirname);
app.get("/tvShows/data", (req, res) => {
  res.send({ tvShows });
});
app.get("/tvShows/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tvShow = tvShows.find(tvShow => tvShow._id === id);
  res.send(tvShow);
});
app.post("/tvShows/data", (req, res) => {
  const newTvShow = req.body;
  newTvShow._id = uuid.v4();
  tvShows.push(newTvShow);

  res.send(`Posted: Your new tvShow has been added to the list of tvShows`);
});
app.put("/tvShows/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tvShow = tvShows.findIndex(tvShow => tvShow._id === id);
  const updatedtvShow = Object.assign(tvShows[tvShow], req.body);
  res.send(updatedtvShow);
});
app.delete("/tvShows/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tvShow = tvShows.findIndex(tvShow => tvShow._id === id);
  res.send(`Deleted entry`);
  tvShows.splice(tvShow, 1);
});

app.listen(9000, () => {});
