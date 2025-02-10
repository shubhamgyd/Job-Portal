const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String,
  role: {type: String, enum: ["job_seeker", "employer"], required: true},
  phone: String,
  resume: String,
  skills: [String],
  experience: [{
    company: String,
    position: String,
    years: Number
  }],
  companyDetails: {
    companyName: String,
    location: String,
    website: String,
    industry: String
  },
  postedJobs: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}]
})

module.exports = mongoose.model("User", UserSchema);