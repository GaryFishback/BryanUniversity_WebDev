const express = require("express");
const app = express();

app.get("/red", (req, res) => {
  res.send({
    red: [
      { array1: "I am the red array" },
      { array2: "I am the red array" },
      { array3: "I am the red array" },
      { array4: "I am the red array" }
    ]
  });
});
// app.listen(9000, () => {});

app.get("/blue", (req, res) => {
  res.send({
    blue: [
      { array1: "I am the blue array" },
      { array2: "I am the blue array" },
      { array3: "I am the blue array" },
      { array4: "I am the blue array" }
    ]
  });
});

app.get("/yellow", (req, res) => {
  res.send({
    yellow: [
      { array1: "I am the yellow array" },
      { array2: "I am the yellow array" },
      { array3: "I am the yellow array" },
      { array4: "I am the yellow array" }
    ]
  });
});
app.listen(9000, () => {});
