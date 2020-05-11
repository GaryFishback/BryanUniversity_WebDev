const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//never give up the password.
const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthdate: { type: Number, required: true },
  issues: { type: Array, default: [] },
  //birthdate, limit realistically.
  //hashed password SALT
  //username
});

module.exports = mongoose.model("User", userSchema);
