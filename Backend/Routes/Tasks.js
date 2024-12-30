const express = require("express");
const router = express.Router();
const Task = require("../Models/Task");
const Employee = require("../Models/Employee");

router.post("/assigne", async (req, res) => {
  const { title, description, date, category, assignee } = req.body;

  if (!title || !description || !date || !category || !assignee) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const employee = await Employee.findOne({ firstName: assignee });
    if (!employee) res.status(400).json({ message: "user does not exist" });

    const newTask = new Task({
      taskTitle: title,
      taskDescription: description,
      taskDate: new Date(date),
      category,
      assignee: employee._id,
    });

    await newTask.save();

    employee.tasks.push(newTask._id);
    employee.taskCounts.active += 1;
    employee.taskCounts.newTask += 1;

    await employee.save();

    res
      .status(201)
      .json({ message: "Task assigned successfully", task: newTask });
  } catch (err) {
    res.status(500).json({ message: "Error assigning task" });
  }
});

router.get("/:employeeId", async (req, res) => {
  try {
    const tasks = await Task.find({ assignee: req.params.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

module.exports = router;
