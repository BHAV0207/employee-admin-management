const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) res.status(400).json({ message: "user already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPass,
      role,
    });
    await newUser.save();
    res.status(200).json({ message: "registeration success" });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      res.status(400).json({ message: "user does not exist , plese register" });

    const pass = bcrypt.compare(existingUser.password, password);
    if (!pass) res.status(400).json({ message: "incorrect password" });

    const token = jwt.sign(
      {
        id: existingUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({ token, role: existingUser.role });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});
