const express = require("express");
const app = express();
app.get("/red", (req, res) => {
  res.send({
    red: [
      { array1: "i am the red array" },
      { array2: "i am the red array" },
      { array3: "i am the red array" },
      { array4: "i am the red array" }
    ]
  });
});
app.listen(9000, () => {});
