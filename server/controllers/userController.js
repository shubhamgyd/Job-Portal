const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register user
exports.registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const {
      name,
      email,
      username,
      password,
      role,
      companyName,
      location,
      website,
      industry,
      code,
    } = req.body;
    console.log(name, email);
    const hashedPassword = await bcrypt.hash(password, 10);

    const resume = req.file ? req.file.path : null;
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      role,
      companyName,
      location,
      website,
      industry,
      code,
      resume,
    });

    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.findOne({ username });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, "secret", {
      expiresIn: "1h",
    });
    console.log(String(user._id));
    res.json({ token, id: String(user._id), role: String(user.role) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
