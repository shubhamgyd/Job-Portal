const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

// Apply for a Job
router.post("/", async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.json({ message: "Application submitted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Applications by Job ID
router.get("/:jobId", async (req, res) => {
  try {
    const applications = await Application.find({
      jobId: req.params.jobId,
    }).populate("userId", "name email");

    if (applications.length === 0) {
      return res.json({ message: "No applications found for this job" });
    }

    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
