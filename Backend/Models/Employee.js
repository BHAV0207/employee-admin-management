const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: ""},
  email: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" ,default: [] }],
  taskCounts: {
    active: { type: Number, default: 0 },
    newTask: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
  },
});


module.exports = mongoose.model("Employee", EmployeeSchema);