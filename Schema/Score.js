const mongoose = require("mongoose");
const userScoreSchema = new mongoose.Schema({
  registrationNumber: String,
  userName: String,
  course:String,
  takenTime:String,
  score: Number,
});

module.exports = mongoose.model("UserScore", userScoreSchema);
