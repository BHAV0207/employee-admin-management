import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState , useEffect } from "react";

function Header({userId}) {

  const [allUserTasks, setAllUserTasks] = useState([]);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState("");


  console.log(userName)
  
  useEffect(() => {
    const fetchingTasks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/auth/user/AllEmployees"
        );
        setAllUserTasks(res.data);
      } catch (err) {
        setError("Failed to fetch employee data");
      }
    };

    fetchingTasks();
  }, []);

  useEffect(() => {
    if (allUserTasks.length > 0) {
      const MatchedTask = allUserTasks.find((t) => t.userId === userId);
      setUserName(MatchedTask.firstName || null);
    }
  }, [allUserTasks, userId]);

  

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/");
    }, 500);
  }
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold text-2xl">
        Hello <br /> <span className="font-bold text-3xl">{userName}</span>
      </div>
      <div>
        <button className="border-2 border-red-500 py-1 px-2 rounded-md bg-red-500 font-bold" 
        onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
