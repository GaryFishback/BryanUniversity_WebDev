const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));
const dbConnectionString = "mongodb://localhost:27017/voterdb";

mongoose.connect(
  dbConnectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the voter DB")
);

app.use("/", require("./routes/userRouter.js"));
app.use("/issues", require("./routes/issuesRouter.js"));
app.use("/comments", require("./routes/commentsRouter"));
// app.use("/postuser", require("./auth_route/newuser.js"));
// app.use("/home", require("./auth_route/home.js")); //list all issues here
// app.use("/profile", require("./auth_route/profile.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(4028, () => {
  console.log("Server is running on port 4028");
});
