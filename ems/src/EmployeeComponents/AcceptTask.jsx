import React from "react";

function AcceptTask({ele}) {

  const formattedDate = new Date(ele.taskDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-yellow-500 h-full p-3 rounded-md flex-shrink-0 w-[300px] min-h-[270px] relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium rounded-lg bg-red-600 px-2">
         { ele.category}
        </div>
        <h3>{formattedDate}</h3>
      </div>
      <div className="m-3 font-bold text-2xl">{ele.taskTitle}</div>
      <p className="text-sm mt-5">{ele.taskDescription} </p>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between mt-2">
        <button className="py-1 px-1 bg-green-600 text-sm rounded-md">
          Completed Task
        </button>
        <button className="py-1 px-1 bg-red-600 text-sm rounded-md">
          Failed Task
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
