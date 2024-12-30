import React from "react";
import axios from 'axios';

function FailedTask({ ele, onUpdate ,setTrigger , trigger }) {
  const formattedDate = new Date(ele.taskDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleTaskUpdate = async (status) => {
    try {
      await axios.patch(
        `http://localhost:4000/api/auth/user/updateTaskStatus/${ele._id}`,
        {
          status,
        }
      );
      onUpdate(ele._id, status);
      setTrigger(!trigger);
    } catch (err) {
      console.error("Failed to update task status", err);
    }
  };

  return (
    <div className="bg-red-800 h-full p-3 rounded-md flex-shrink-0 w-[300px] min-h-[270px] relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium rounded-lg bg-red-600 px-2">
          {ele.category}
        </div>
        <h3>{formattedDate}</h3>
      </div>
      <div className="m-3 font-bold text-2xl">{ele.taskTitle}</div>
      <p className="text-sm mt-5">{ele.taskDescription} </p>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between mt-2">
        <button
          className="py-1 px-1 bg-green-600 text-sm rounded-md"
          onClick={() => handleTaskUpdate("completed")}
        >
          Completed Task
        </button>
        <button
          className="py-1 px-1 bg-red-600 text-sm rounded-md"
          onClick={() => handleTaskUpdate("failed")}
        >
          Failed Task
        </button>
      </div>
    </div>
  );
}

export default FailedTask;
