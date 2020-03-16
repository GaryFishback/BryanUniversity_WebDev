const express = require("express");
const app = express();
const uuid = require("uuid");
const path = require("path");
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/server.html"));
});

const tvShows = require("./TVShows/data");
app.use(
  "/tvShows",
  express.static(path.join(__dirname, "/TVShows/tvShows.js"))
);
app.use("/tvShows", express.static(path.join(__dirname, "/TVShows/")));

app.get("/tvShows", function(req, res) {
  res.sendFile(path.join(__dirname + "/TVShows/tvShows.html"));
});
app.get("/tvShows", function(req, res) {
  res.sendFile(path.join(__dirname + "/TVShows/tvShows.html"));
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

const movies = require("./Movies/data");
app.use("/movies", express.static(path.join(__dirname, "/Movies")));
app.use("/movies", express.static(path.join(__dirname, "/Movies/movies.js")));
app.get("/movies", function(req, res) {
  res.sendFile(path.join(__dirname + "/Movies/movies.html"));
});

// console.log(__dirname);
app.get("/movies/data", (req, res) => {
  res.send({ movies });
});
app.get("/movies/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const movie = movies.find(movie => movie._id === id);
  res.send(movie);
});
app.post("/movies/data", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuid.v4();
  movies.push(newMovie);

  res.send(`Posted: Your new movie has been added to the list of movies`);
});
app.put("/movies/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const movie = movies.findIndex(movie => movie._id === id);
  const updatedmovie = Object.assign(movies[movie], req.body);
  res.send(updatedmovie);
});
app.delete("/movies/data/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const movie = movies.findIndex(movie => movie._id === id);
  res.send(`Deleted entry`);
  movies.splice(movie, 1);
});

app.listen(9000, () => {});
