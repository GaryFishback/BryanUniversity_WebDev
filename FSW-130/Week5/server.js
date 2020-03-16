const express = require("express");
const app = express();
const uuid = require("uuid");
const path = require("path");
app.use(express.json());
const movies = require("./Movies/data");
app.use("/movies", express.static(path.join(__dirname, "/Movies")));
app.get("/movies", function(req, res) {
  res.sendFile(path.join(__dirname + "/Movies/movies.html"));
});
app.use("/tvshows", express.static(path.join(__dirname, "/TVShows")));
app.get("/tvshows", function(req, res) {
  res.sendFile(path.join(__dirname + "/TVShows/tvShows.html"));
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
