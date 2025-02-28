const express = require("express");
const Application = require("../models/Application");
const mongoose = require("mongoose");

const router = express.Router();

// Apply for a Job
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { userId, jobId } = req.body;

    // if (!mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(jobId)) {
    //   return res.status(400).json({ error: "Invalid userId or jobId format." });
    // }

    const newApplication = new Application({
      userId,
      jobId
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted!" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Job Application
router.delete("/", async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const result = await Application.deleteOne({userId, jobId})

    if (result.deletedCount === 0) {
      res.status(404).json({ error: "Application not found." });
    }

    res.json({ message: "Application deleted successfully!" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Applications by Job ID
router.get("/:jobId", async (req, res) => {
  try {
    const { jobId } = req.params;

    if (!mongoose.isValidObjectId(jobId)) {
      res.status(400).json({ error: "Invalid jobId format." });
    }

    const applications = await Application.find({ jobId }).populate("userId", "name email resume");

    applications.forEach((app) => {
      if (app.userId?.resume) {
        app.userId.resume = `http://localhost:5000/${app.userId.resume}`;
      }
    });

    if (applications.length === 0) {
      res.status(404).json({ message: "No applications found for this job." });
    }

    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Applications by User ID
router.get("/myApplications/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.isValidObjectId(userId)) {
      res.status(400).json({ error: "Invalid userId format." });
    }

    const myApplications = await Application.find({ userId }).populate("jobId", "title jobImage");
    res.json(myApplications);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updateStatus", async (req, res) => {
  try {const {jobId, userId, status} = req.body;

  if (!mongoose.isValidObjectId(jobId) || !mongoose.isValidObjectId(userId)) {
    res.sendStatus(400).json({error: "Invalid jobId or userId"});
  }

  const application = await Application.findOneAndUpdate({jobId, userId}, {status}, {new:true})

  if (!application) {
    res.sendStatus(400).json({error: "application not found"})
  }

  res.sendStatus(201).json({message: "status of the applcation updated successfully!"})
} catch (error) {
  console.error("Error updating the application status", error);
  res.sendStatus(500).json({error: "Internal Server Error"});
}
})

module.exports = router;
