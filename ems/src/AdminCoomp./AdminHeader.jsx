import React from "react";
import {useNavigate} from "react-router-dom"

function AdminHeader(props) {

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
        Hello <br /> <span className="font-bold text-3xl">Admin</span>
      </div>
      <div>
        <button className="border-2 border-red-500 py-1 px-2 rounded-md bg-red-500 font-bold" 
        onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminHeader;
