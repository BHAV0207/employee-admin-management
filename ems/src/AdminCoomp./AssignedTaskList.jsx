import React, { useEffect, useState } from "react";
import axios from "axios";

function Assigne({ reRendering }) {
  let [employees, setEmployees] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  useEffect(() => {
    const fetchingUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/auth/user/AllEmployees"
        );
        setEmployees(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employee data");
        setLoading(false);
      }
    };

    fetchingUsers();
  }, [reRendering]);

  if (loading) {
    return (
      <div className="bg-[#1c1c1c] p-5 rounded mt-5">
        <h2 className="text-lg font-medium text-white">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1c1c1c] p-5 rounded mt-5">
        <h2 className="text-lg font-medium text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] p-4 md:p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 p-2 md:p-4 rounded">
        <div className="grid grid-cols-5 gap-2 text-xs md:text-lg">
          <h2 className="font-medium">Employee Name</h2>
          <h3 className="font-medium text-center">New</h3>
          <h5 className="font-medium text-center">Active</h5>
          <h5 className="font-medium text-center">Done</h5>
          <h5 className="font-medium text-center">Failed</h5>
        </div>
      </div>
      <div className="space-y-2">
        {employees.map((e, key) => (
          <div
            key={key}
            className="border-2 border-emerald-500 p-2 md:p-4 rounded"
          >
            <div className="grid grid-cols-5 gap-2 items-center text-sm md:text-lg">
              <h2 className="font-medium truncate">{`${e.firstName} ${e.lastName}`}</h2>
              <h3 className="font-medium text-blue-400 text-center">
                {e.taskCounts.newTask}
              </h3>
              <h5 className="font-medium text-yellow-400 text-center">
                {e.taskCounts.active}
              </h5>
              <h5 className="font-medium text-white text-center">
                {e.taskCounts.completed}
              </h5>
              <h5 className="font-medium text-red-600 text-center">
                {e.taskCounts.failed}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assigne;
