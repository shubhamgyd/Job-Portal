const express = require("express");
const Job = require("../models/Job");
const router = express.Router();
const mongoose = require("mongoose");
// // Create Job
// router.post("/", async (req, res) => {
//   try {
//     const newJob = new Job(req.body);
//     await newJob.save();
//     res.json({ message: "Job posted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Create Job
router.post("/", async (req, res) => {
  try {
    const { title, salary, workExperience, typeOfEmployment, description, jobImage, location, postedBy} = req.body;

    // Convert postedBy (string) to ObjectId
    if (!mongoose.Types.ObjectId.isValid(postedBy)) {
      return res.status(400).json({ error: "Invalid employer ID" });
    }

    const newJob = new Job({
      title,
      salary,
      workExperience,
      typeOfEmployment,
      description,
      jobImage,
      location,
      postedBy: new mongoose.Types.ObjectId(postedBy)  // Convert string to ObjectId
    });

    await newJob.save();
    res.json({ message: "Job posted successfully!" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Jobs
router.post("/bulk", async (req, res) => {
  try{
    const jobs = req.body;

    const validJobs = jobs.map((job) => ({
      ...job, postedBy: new mongoose.Types.ObjectId(job.postedBy)
    }))

    await Job.insertMany(validJobs)
    res.status(201).json({message: "Jobs inserted successfully"})
  }catch(error) {
    res.status(500).json({error: error.message});
  }
})

// router.post("/bulk", async (req, res) => {
//   try {
//     const jobs = req.body; // Expecting an array of job objects

//     // Validate each job's `postedBy` as ObjectId
//     const validJobs = jobs.map(job => ({
//       ...job,
//       postedBy: new mongoose.Types.ObjectId(job.postedBy)
//     }));

//     // Insert jobs into database
//     const insertedJobs = await Job.insertMany(validJobs);
    
//     res.status(201).json({ message: "Jobs posted successfully!", insertedJobs });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Get All Jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "company");
    // const jobs = await Job.find()
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Jobs
// router.get("/", async (req, res) => {
//   try {
//     const jobs = await Job.find().populate("postedBy", "name companyDetails");
//     if (jobs.length === 0) {
//       return res.json({ message: "No jobs found" });
//     }
//     res.json(jobs);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const Job = require("../models/Job");

// const router = express.Router();

// // Create Job
// router.post("/", async (req, res) => {
//   try {
//     const { title, company, location, salary, description, requirements, postedBy } = req.body;

//     // Convert postedBy (string) to ObjectId
//     if (!mongoose.Types.ObjectId.isValid(postedBy)) {
//       return res.status(400).json({ error: "Invalid employer ID" });
//     }

//     const newJob = new Job({
//       title,
//       company,
//       location,
//       salary,
//       description,
//       requirements,
//       postedBy: new mongoose.Types.ObjectId(postedBy)  // Convert string to ObjectId
//     });

//     await newJob.save();
//     res.json({ message: "Job posted successfully!" });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
