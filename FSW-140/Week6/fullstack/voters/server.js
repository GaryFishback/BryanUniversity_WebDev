const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
// const mongoose = require("mongoose");
const mysql = require("mysql");
const expressJwt = require("express-jwt");
app.use(express.json());
app.use(morgan("dev"));
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "774107",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});
// app.use("/", require("./routes/authRouter"));
// app.use("/", expressJwt({ secret: process.env.SECRET }));
// app.use("/user", require("./routes/userRouter.js"));
// app.use("/issues", require("./routes/issuesRouter.js"));
// app.use("/comments", require("./routes/commentsRouter.js"));
app.get("/createdb", (req, res) => {
  let sql = `CREATE DATABASE Issues;`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);

    res.send("Database Issues created");
  });
});
app.get("/createdb", (req, res) => {
  let useSql = `USE Issues;`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send("using Issues Database");
  });
});

app.get("/createdb", (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS Issues(_id INT , title VARCHAR(100),
    description VARCHAR(1000), date 
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    voters: { type: Array, default: [] },
    comments: { type: Array, default: [] },
    date: { type: Date, required: true },
    userID:);`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);

    res.send("Database Issues created");
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
