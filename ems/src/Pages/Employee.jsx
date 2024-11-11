import React from 'react'
import Header from '../CommonComponents/Header'
import TaskStatusList from '../EmployeeComponents/TaskStatusList'
import TasksList from '../EmployeeComponents/TasksList'

function Employee(props) {
  return (
   <div className='p-10'>
      <Header changeUser={props.changeUser}></Header>
      <TaskStatusList></TaskStatusList>
      <TasksList></TasksList>
   </div>
  )
}

export default Employee