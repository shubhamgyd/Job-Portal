const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  username: String,
  password: String,
  role: {type: String, enum: ["job_seeker", "employer"], required: true},
  resume: String,
  companyName: String,
  location: String,
  website: String,
  industry: String,
  code: String,
  postedJobs: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}]
})

module.exports = mongoose.model("User", UserSchema);