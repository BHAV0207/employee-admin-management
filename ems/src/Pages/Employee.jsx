import React from 'react'
import Header from '../CommonComponents/Header'
import TaskStatusList from '../EmployeeComponents/TaskStatusList'
import TasksList from '../EmployeeComponents/TasksList'

function Employee() {
  return (
   <div className='p-10'>
      <Header></Header>
      <TaskStatusList></TaskStatusList>
      <TasksList></TasksList>
   </div>
  )
}

export default Employee