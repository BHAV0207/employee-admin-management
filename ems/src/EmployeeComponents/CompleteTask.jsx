import React from 'react'

function CompleteTask({cardInfo}) {
  return (
    <div className="bg-yellow-500 h-full p-3 rounded-md flex-shrink-0 w-[300px] min-h-[270px] relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium rounded-sm bg-red-600 px-2">
          {cardInfo.category}
        </div>
        <h3>{cardInfo.taskDate}</h3>
      </div>
      <div className="m-3 font-bold text-2xl">{cardInfo.taskTitle}</div>
      <p className="text-sm mt-5">{cardInfo.taskDescription}</p>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between mt-2">
        <button className="py-1 px-1 bg-green-600 text-sm rounded-md">
          Completed Task
        </button>
        <button className="py-1 px-1 bg-red-600 text-sm rounded-md">
          Failed Task
        </button>
      </div>
    </div>
  )
}

export default CompleteTask