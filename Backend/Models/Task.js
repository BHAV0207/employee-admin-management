const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  newTask: { type: Boolean, default: true },
  completed: { type: Boolean, default: false },
  failed: { type: Boolean, default: false },
  taskTitle: { type: String, required: true },
  taskDescription: { type: String, required: true },
  taskDate: { type: Date, required: true },
  category: { type: String, required: true },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
});

module.exports = mongoose.model('Task' , TaskSchema);