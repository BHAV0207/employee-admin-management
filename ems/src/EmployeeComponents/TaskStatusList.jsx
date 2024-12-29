import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskStatusList({ userId }) {
  let [allUserTasks, setAllUserTasks] = useState([]);
  let [task, setTask] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  console.log(task)
  // console.log(allUserTasks)

  useEffect(() => {
    const fetchingTasks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/auth/user/AllEmployees"
        );
        setAllUserTasks(res.data);
        setLoading(false);
        // console.log(allUserTasks);
      } catch (err) {
        setError("Failed to fetch employee data");
        setLoading(false);
      }
    };
    fetchingTasks();
  }, []);

  useEffect(() => {
    if (allUserTasks.length > 0) {
      const MatchedTask = allUserTasks.find((task) => task.userId === userId);
      setTask(MatchedTask);
      // console.log(MatchedTask);
    }

  }, [allUserTasks, userId]);

  return (
    <div className="flex mt-10 items-center justify-between gap-5">
      <div className="bg-blue-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">1</h1>
        <h1 className="font-medium text-2xl">New Task</h1>
      </div>
      <div className="bg-green-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">2</h1>
        <h1 className="font-medium text-2xl">Comeleted Task</h1>
      </div>
      <div className="bg-red-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">3</h1>
        <h1 className="font-medium text-2xl">Accepted Task</h1>
      </div>
      <div className="bg-yellow-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">4</h1>
        <h1 className="font-medium text-2xl">Failed Task</h1>
      </div>
    </div>
  );
}

export default TaskStatusList;
