const express = require("express");
const router = express.Router();
const Employee = require('../Models/Employee');

router.get("/AllEmployees", async (req, res) => {
  try {
    const employees = await Employee.find().populate("tasks");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;