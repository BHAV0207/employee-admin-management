import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { useState , useEffect } from "react";
import axios from 'axios'

function TasksList({userId}) {
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
  }, []);

  useEffect(() => {
    if (allUserTasks.length > 0) {
      const MatchedTask = allUserTasks.find((t) => t.userId === userId);
      setTask(MatchedTask.tasks || null);
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
    <div className=" flex mt-10  gap-5  justify-start items-center overflow-x-auto flex-nowrap h-[55%] py-10">
      {task?.map((ele , key) => {
        console.log(ele);
        if(ele?.active){
          return <AcceptTask ele={ele}></AcceptTask>
        }
        else if(ele?.completed){
          return  <CompleteTask ele={ele}></CompleteTask>
        }
        else if(ele?.failed){
          return <FailedTask ele={ele}></FailedTask>
        }
        else{
          return <NewTask ele={ele}></NewTask>
        }
      })}
    </div>
  );
}

export default TasksList;
