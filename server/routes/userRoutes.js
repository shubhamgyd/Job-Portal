const express = require("express");
const { registerUser, loginUser} = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
})

const upload = multer({storage});

router.post("/register", upload.single("resume"), registerUser);
router.post("/login", loginUser);
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
})

module.exports = router;