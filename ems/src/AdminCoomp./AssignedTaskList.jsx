import React, { useEffect, useState } from "react";
import axios from "axios";

function Assigne({reRendering}) {
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
        // console.log(res.data);
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
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="">
        {employees.map((e, key) => (
          <div
            key={key}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="text-lg font-medium w-1/5">{`${e.firstName} ${e.lastName}`}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {e.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {e.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-white">
              {e.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {e.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assigne;
