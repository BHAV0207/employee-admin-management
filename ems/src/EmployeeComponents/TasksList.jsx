import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { useState , useEffect } from "react";
import axios from 'axios'

function TasksList({userId ,setTrigger, trigger}) {
  const [allUserTasks, setAllUserTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
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
      setTask(MatchedTask.tasks || null);
    }
  }, [allUserTasks, userId]);


  const handleTaskUpdate = (taskId, status) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId
          ? { ...task, completed: status === "completed", failed: status === "failed", active: false }
          : task
      )
    );
  };

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
    <div className="flex mt-5 md:mt-10 gap-3 md:gap-5 justify-start items-center overflow-x-auto flex-nowrap h-auto md:h-[55%] py-5 md:py-10">
      {task?.map((ele , key) => {
        if(ele?.active){
          return <AcceptTask ele={ele} onUpdate={handleTaskUpdate} setTrigger={setTrigger} trigger={trigger}></AcceptTask>
        }
        else if(ele?.completed){
          return  <CompleteTask ele={ele} onUpdate={handleTaskUpdate} setTrigger={setTrigger} trigger={trigger}></CompleteTask>
        }
        else if(ele?.failed){
          return <FailedTask ele={ele} onUpdate={handleTaskUpdate} setTrigger={setTrigger} trigger={trigger}></FailedTask>
        }
        else{
          return <NewTask ele={ele} onUpdate={handleTaskUpdate} setTrigger={setTrigger} trigger={trigger}></NewTask>
        }
      })}
    </div>
  );
}

export default TasksList;
