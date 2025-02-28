const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  appliedAt: { type: Date, default: Date.now },
});

// Defining Virtual Field to rename "jobId" to "jobDetails"
ApplicationSchema.virtual("jobDetails", {
  ref: "job",
  localField: "jobId",
  foreignField: "_id",
  justOne: true
})

module.exports = mongoose.model("Application", ApplicationSchema);