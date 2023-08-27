const mongoose = require("mongoose");

const tblSchema = new mongoose.Schema({
  user: String,
  course: String,
  registrationno:String,
  password: String,
  cpassword: String,
});

module.exports = mongoose.model("user", tblSchema);