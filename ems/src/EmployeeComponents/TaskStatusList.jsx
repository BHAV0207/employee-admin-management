import React from 'react'

function TaskStatusList({data}) {
  return (
    <div className='flex mt-10 items-center justify-between gap-5'>
      <div className='bg-blue-500 py-6 px-9 w-[45%] rounded-md'>
        <h1 className='font-semibold text-3xl'>{data.taskCounts.newTask}</h1>
        <h1 className='font-medium text-2xl'>New Task</h1>
      </div>
      <div className='bg-green-500 py-6 px-9 w-[45%] rounded-md'>
        <h1 className='font-semibold text-3xl'>{data.taskCounts.completed}</h1>
        <h1 className='font-medium text-2xl'>Comeleted Task</h1>
      </div>
      <div className='bg-red-500 py-6 px-9 w-[45%] rounded-md'>
        <h1 className='font-semibold text-3xl'>{data.taskCounts.active}</h1>
        <h1 className='font-medium text-2xl'>Accepted Task</h1>
      </div>
      <div className='bg-yellow-500 py-6 px-9 w-[45%] rounded-md'>
        <h1 className='font-semibold text-3xl'>{data.taskCounts.failed}</h1>
        <h1 className='font-medium text-2xl'>Failed Task</h1>
      </div>
      
    </div>
  )
}

export default TaskStatusList