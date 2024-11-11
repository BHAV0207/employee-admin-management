import React from 'react'
import Header from '../CommonComponents/Header'
import TaskCreationForm from '../AdminCoomp./TaskCreationForm'
import AssignedTaskList from '../AdminCoomp./AssignedTaskList'

function Admin() {
  return (
    <div className='p-10'>
      <Header></Header>
      <TaskCreationForm></TaskCreationForm>
      <AssignedTaskList></AssignedTaskList>
    </div>
  )
}

export default Admin