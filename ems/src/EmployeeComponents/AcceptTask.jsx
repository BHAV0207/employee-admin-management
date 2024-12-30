import React, { useState } from "react";
import axios from "axios";

function AcceptTask({ ele, onUpdate, setTrigger, trigger }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const formattedDate = new Date(ele.taskDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleTaskUpdate = async (status) => {
    try {
      setIsDisabled(true);
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
      setIsDisabled(false);
    }
  };

  return (
    <div className="bg-blue-700 h-full p-3 rounded-md flex-shrink-0 w-[300px] min-h-[270px] relative">
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
          className={`py-1 px-1 text-sm rounded-md ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-green-600 hover:bg-green-700"
          }`}
          onClick={() => handleTaskUpdate("completed")}
          disabled={isDisabled}
        >
          Completed Task
        </button>
        <button
          className={`py-1 px-1 text-sm rounded-md ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-red-600 hover:bg-red-700"
          }`}
          onClick={() => handleTaskUpdate("failed")}
          disabled={isDisabled}
        >
          Failed Task
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
