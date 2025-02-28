const express = require("express");
const Job = require("../models/Job");
const router = express.Router();
const mongoose = require("mongoose");

// create a single job
router.post("/", async (req, res) => {
  try {
    const {
      title,
      salary,
      typeOfEmployment,
      description,
      jobImage,
      location,
      postedBy,
    } = req.body;
    console.log(title);
    console.log(req.body);

    // Convert postedBy (string) to ObjectId
    if (!mongoose.Types.ObjectId.isValid(postedBy)) {
      return res.status(400).json({ error: "Invalid employer ID" });
    }

    console.log(title, postedBy);

    const newJob = new Job({
      title,
      salary,
      typeOfEmployment,
      description,
      jobImage,
      location,
      postedBy: new mongoose.Types.ObjectId(postedBy), // Convert string to ObjectId
    });

    await newJob.save();

    res.json({ message: "Job posted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Jobs
router.post("/bulk", async (req, res) => {
  try {
    const jobs = req.body;

    const validJobs = jobs.map((job) => ({
      ...job,
      postedBy: new mongoose.Types.ObjectId(job.postedBy),
    }));

    await Job.insertMany(validJobs);
    res.status(201).json({ message: "Jobs inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "company");
    // const jobs = await Job.find()
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get job by its id
router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const job = await Job.find({ _id: req.params.id });
    console.log(job);
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/jobsPosted/:postedBy", async (req, res) => {
  try {
    const jobs = await Job.find({postedBy: {_id: req.params.postedBy}});
    res.json(jobs)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

module.exports = router;

