const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//never give up the password.
const userSchema = new Schema({
  name: { type: String, required: true },
  //birthdate, limit realistically.
  //hashed password SALT
  //username
});

module.exports = mongoose.model("User", userSchema);
