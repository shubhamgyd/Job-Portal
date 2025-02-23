const express = require("express");
const { registerUser, loginUser} = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
})

const upload = multer({storage});

router.post("/register", upload.single("resume"), registerUser);
router.post("/login", loginUser);

module.exports = router;