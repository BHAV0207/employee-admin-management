import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskStatusList({ userId  , setTrigger, trigger}) {
  const [allUserTasks, setAllUserTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(allUserTasks);

  useEffect(() => {
    const fetchingTasks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/auth/user/AllEmployees"
        );
        setAllUserTasks(res.data);
      } catch (err) {
        setError("Failed to fetch employee data");
      } finally {
        setLoading(false);
      }
    };

    fetchingTasks();
  }, [trigger]);

  useEffect(() => {
    if (allUserTasks.length > 0) {
      const MatchedTask = allUserTasks.find((t) => t.userId === userId);
      setTask(MatchedTask || null); 
    }
  }, [allUserTasks, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!task) {
    return <div>No tasks found for this user.</div>;
  }

  return (
    <div className="flex mt-10 items-center justify-between gap-5">
      <div className="bg-blue-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">{task.taskCounts?.newTask || 0}</h1>
        <h1 className="font-medium text-2xl">New Task</h1>
      </div>
      <div className="bg-green-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">{task.taskCounts?.completed || 0}</h1>
        <h1 className="font-medium text-2xl">Completed Task</h1>
      </div>
      <div className="bg-red-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">{task.taskCounts?.failed || 0}</h1>
        <h1 className="font-medium text-2xl">Failed Task</h1>
      </div>
      <div className="bg-yellow-500 py-6 px-9 w-[45%] rounded-md">
        <h1 className="font-semibold text-3xl">{task.taskCounts?.active || 0}</h1>
        <h1 className="font-medium text-2xl">Active Task</h1>
      </div>
    </div>
  );
}

export default TaskStatusList;
