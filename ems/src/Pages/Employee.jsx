import React from "react";
import Header from "../EmployeeComponents/Header";
import TaskStatusList from "../EmployeeComponents/TaskStatusList";
import TasksList from "../EmployeeComponents/TasksList";

function Employee({userId}) {
  return (
    <div className="p-10">
      <Header></Header>
      <TaskStatusList userId={userId} ></TaskStatusList>
      {/* <TasksList data={props.data}></TasksList> */}
    </div>
  );
}

export default Employee;
