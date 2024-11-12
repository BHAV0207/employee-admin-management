import React from "react";
import Header from "../EmployeeComponents/Header";
import TaskStatusList from "../EmployeeComponents/TaskStatusList";
import TasksList from "../EmployeeComponents/TasksList";

function Employee(props) {
  return (
    <div className="p-10">
      <Header changeUser={props.changeUser} data={props.data}></Header>
      <TaskStatusList data={props.data}></TaskStatusList>
      <TasksList data={props.data}></TasksList>
    </div>
  );
}

export default Employee;
