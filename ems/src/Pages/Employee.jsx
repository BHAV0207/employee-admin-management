import React, { useState } from "react";
import Header from "../EmployeeComponents/Header";
import TaskStatusList from "../EmployeeComponents/TaskStatusList";
import TasksList from "../EmployeeComponents/TasksList";

function Employee({userId}) {
  let [trigger,  setTrigger] = useState(false);
  return (
    <div className="p-10">
      <Header></Header>
      <TaskStatusList userId={userId} setTrigger={setTrigger} trigger={trigger}></TaskStatusList>
      <TasksList userId={userId} setTrigger={setTrigger} trigger={trigger}></TasksList>
    </div>
  );
}

export default Employee;
