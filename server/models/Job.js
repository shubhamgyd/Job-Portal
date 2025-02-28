const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  salary: String,
  typeOfEmployment: String,
  description: String,
  jobImage: String,
  location: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
