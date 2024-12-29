import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  let navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [role, setRole] = useState("user");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submittingForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", {
        name: username, 
        email,
        password: pass, 
        role,
      });
      setSuccess("Registration successful. You can now log in.");
      setError("");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError("Registration failed");
      setSuccess("");
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-emerald-500 border-2 p-20">
        <form
          onSubmit={submittingForm}
          className="flex flex-col justify-center items-center space-y-4"
        >
          <h1 className="text-4xl font-semibold text-emerald-500 mb-3">
            Register
          </h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <input
            type="text"
            placeholder="Create your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-transparent border-2 border-emerald-500 outline-none w-full py-2 px-4 rounded-md"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-2 border-emerald-500 outline-none w-full py-2 px-4 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-transparent border-2 border-emerald-500 outline-none w-full py-2 px-4 rounded-md"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="w-full">
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-transparent border-2 border-emerald-500 outline-none w-full px-4 py-2 rounded-md focus:ring focus:ring-emerald-200"
            >
              <option value="user" className="text-emerald-500 bg-black">
                User
              </option>
              <option value="admin" className="text-emerald-500 bg-black">
                Admin
              </option>
            </select>
          </div>
          <button className="bg-emerald-500 outline-none w-full py-2 px-5 rounded-md text-black">
            Register
          </button>
          <p className="text-gray-600 mt-4">
            Already a user?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-emerald-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
