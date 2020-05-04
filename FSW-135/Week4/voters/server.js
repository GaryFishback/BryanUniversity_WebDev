const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/voterdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the voter DB")
);
app.use("/", require("./routes/authRouter"));
app.use("/", expressJwt({ secret: process.env.SECRET }));
app.use("/user", require("./routes/userRouter.js"));
app.use("/issues", require("./routes/issuesRouter.js"));
app.use("/comments", require("./routes/commentsRouter.js"));
// app.use("/postuser", require("./auth_route/newuser.js"));
// app.use("/home", require("./auth_route/home.js")); //list all issues here
// app.use("/profile", require("./auth_route/profile.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(4028, () => {
  console.log("Server is running on port 4028");
});
