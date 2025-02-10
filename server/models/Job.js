const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  description: String,
  requirements: [String],
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Job", JobSchema);