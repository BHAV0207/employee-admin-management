import React, { useState } from "react";
import TaskCreationForm from "../AdminCoomp./TaskCreationForm";
import AssignedTaskList from "../AdminCoomp./AssignedTaskList";
import AdminHeader from "../AdminCoomp./AdminHeader";

function Admin() {

  let [reRendering , setReRendering] = useState(false);

  return (
    <div className="p-10">
      <AdminHeader ></AdminHeader>
      <TaskCreationForm setReRendering={setReRendering} reRendering={reRendering}></TaskCreationForm>
      <AssignedTaskList reRendering={reRendering}></AssignedTaskList>
    </div>
  );
}

export default Admin;
