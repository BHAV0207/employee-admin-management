import React from 'react'
import Header from '../CommonComponents/Header'
import TaskCreationForm from '../AdminCoomp./TaskCreationForm'
import AssignedTaskList from '../AdminCoomp./AssignedTaskList'

function Admin(props) {
  return (
    <div className='p-10'>
      <Header changeUser={props.changeUser}></Header>
      <TaskCreationForm></TaskCreationForm>
      <AssignedTaskList></AssignedTaskList>
    </div>
  )
}

export default Admin