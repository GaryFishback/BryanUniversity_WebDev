const express = require("express");
const authRouter = express.Router();
const UserObject = require("./../models/user");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "774107",
  database: "votesdb",
});

const jwt = require("jsonwebtoken");
//add new user DIRECTLY
emptyhandling = (found, res) => {
  !found.length //is 2 equal signs in purpose
    ? res.status(204).send()
    : res.status(200).send(found);
};

authRouter.post("/signup", (req, res, next) => {
  let sql = `SELECT username FROM users`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(
      result[
        result.findIndex((issue) => {
          return issue.username === `${req.body.username}`;
        })
      ]
    );
    if (
      result[
        result.findIndex((issue) => {
          return issue.username === `${req.body.username}`;
        })
      ]
    ) {
      res.status(403);
      return next(new Error("That username is taken"));
    } else {
      let date = new Date();
      req.body.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
      let newUser = new UserObject(
        req.body.name,
        req.body.username,
        req.body.date,
        req.body.password
      );

      let sql = `INSERT INTO users (name, username, password, birthdate) VALUES ('${req.body.name}','${req.body.username}', '${req.body.password}','${req.body.date}' );`;
      db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }

        // return res.status(201).send(newUser);

        // emptyhandling(result, res);
        var userObj = {
          name: req.body.name,
          username: req.body.username,
          date: req.body.date,
          password: req.body.password,
        };
        console.log("newUser", userObj);
        const token = jwt.sign(userObj, process.env.SECRET);
        return res.status(201).send({ token, user: newUser });
      });
    }
  });
});
//   });
// });

//login
authRouter.post("/", (req, res, next) => {
  let usernameSql = `SELECT username FROM users`;
  db.query(usernameSql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(
      result[
        result.findIndex((issue) => {
          return issue.username === `${req.body.username}`;
        })
      ]
    );
    if (
      !result[
        result.findIndex((issue) => {
          return issue.username === `${req.body.username}`;
        })
      ]
    ) {
      res.status(403);
      return next(new Error("Username or Password are incorrect"));
    }
    let passwordSql = `SELECT password FROM users WHERE username= '${req.body.username}'`;
    db.query(passwordSql, (err, result) => {
      if (err) {
        throw err;
      }
      if (
        !result[
          result.findIndex((userobj) => {
            return userobj.password === `${req.body.password}`;
          })
        ]
      ) {
        res.status(403);
        return next(new Error("Username or Password are incorrect"));
      }
    });
    let sql = `SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`;
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      let { _id, name, username, date, password } = result[0];
      console.log(_id, name, username, date, password);
      userObj = { _id, name, username, date, password };
      console.log(userObj);
      const token = jwt.sign(userObj, process.env.SECRET);
      return res.status(200).send({ token, userObj });
    });
  });
});

module.exports = authRouter;
