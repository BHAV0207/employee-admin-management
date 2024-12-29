const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/dataBase");
const cors = require("cors");

dotenv.config();
db();

const app = express();

app.use(express.json());
app.use(cors());

const AuthRoutes = require("./Routes/Auth");
app.use("/api/auth", AuthRoutes);

const EmployeeRoutes = require("./Routes/Employee");
app.use("/api/auth/user", EmployeeRoutes);

const TasksRoutes = require("./Routes/Tasks");
app.use("/api/auth/user", TasksRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server started");
});
