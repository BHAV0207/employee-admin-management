import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUserId }) {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const submittingForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://employee-admin-management-backend.onrender.com/api/auth/login",
        {
          email,
          password: pass,
        }
      );
      const { token, role, id } = res.data;
      setUserId(id);
      localStorage.setItem("token", token);
      if (role === "admin") navigate("/admin");
      else if (role === "user") navigate("/employee");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center px-4">
      <div className="border-emerald-500 border-2 p-6 md:p-20 w-full max-w-md">
        <form
          onSubmit={submittingForm}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl font-semibold text-emerald-500 mb-3">
            Login
          </h1>
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent border-2 border-emerald-500 outline-none w-full py-2 px-4 rounded-md mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="bg-transparent border-2 border-emerald-500 outline-none w-full m-5 py-2 px-4 rounded-md"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="bg-emerald-500 outline-none py-2 px-5 rounded-md text-black">
            Login
          </button>
          <p className="text-gray-600 mt-4">
            New user?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-emerald-500 cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
