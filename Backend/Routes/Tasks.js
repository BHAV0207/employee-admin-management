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



router.patch("/updateTaskStatus/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.completed = status === "completed";
    task.failed = status === "failed";
    task.active = false;
    task.newTask = false;

    await task.save();


    const employee = await Employee.findById(task.assignee);
    if (employee) {
      if (status === "completed") {
        employee.taskCounts.completed += 1;
        employee.taskCounts.active -= 1;
      } else if (status === "failed") {
        employee.taskCounts.failed += 1;
        employee.taskCounts.active -= 1;
      }
      await employee.save();
    }

    res
      .status(200)
      .json({ message: "Task updated successfully", task});
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
});

module.exports = router;
