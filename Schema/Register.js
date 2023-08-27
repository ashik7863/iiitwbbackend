const mongoose = require("mongoose");

const tblSchema = new mongoose.Schema({
  user: String,
  course: String,
  registrationno:Number,
  password: String,
  cpassword: String,
});

module.exports = mongoose.model("user", tblSchema);