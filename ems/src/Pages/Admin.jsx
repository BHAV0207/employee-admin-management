import React from "react";
import TaskCreationForm from "../AdminCoomp./TaskCreationForm";
import AssignedTaskList from "../AdminCoomp./AssignedTaskList";
import AdminHeader from "../AdminCoomp./AdminHeader";

function Admin(props) {
  return (
    <div className="p-10">
      <AdminHeader changeUser={props.changeUser}></AdminHeader>
      <TaskCreationForm allUserData={props.allUserData} handelUpdatingTask={props.handelUpdatingTask}></TaskCreationForm>
      <AssignedTaskList allUserData={props.allUserData}></AssignedTaskList>
    </div>
  );
}

export default Admin;
