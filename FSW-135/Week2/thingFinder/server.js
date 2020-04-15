const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/finderdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB")
);

app.use("/data", require("./routes/inventory"));
//get all
// app.get("/data", (req, res) => {
//   data.find((err, items) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     } else {
//       return res.status(200).send(items);
//     }
//   });
// });

// //get one
// app.get("/data/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const item = data.find((item) => item._id === id);
//   res.send(item);
// });

// app.get("/data/search/type", (req, res, next) => {
//   const query = req.query.type;
//   console.log(query);
//   const item = data.filter((item) => item.type === query);
//   res.send(item);
// });

// app.get("/data/search/name", (req, res) => {
//   const query = req.query.name;
//   console.log(query);
//   const item = data.filter((item) => item.name === query);
//   res.send(item);
// });

// app.get("/data/search/price", (req, res) => {
//   const query = Number(req.query.price);
//   console.log(query);
//   const item = data.filter((item) => item.price === query);
//   res.send(item);
// });

app.use((err, req, res, next) => {
  console.log(err);
  console.log(res.statusCode);
  if (res.statusCode !== 404) {
    res.status(500);
  }
  return res.send({ errMsg: err.message });
});
app.listen(3030, () => {});
