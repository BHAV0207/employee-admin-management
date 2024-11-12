import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TasksList({data}) {
  return (
    <div className=" flex mt-10  gap-5  justify-start items-center overflow-x-auto flex-nowrap h-[55%] py-10">
      {data.tasks.map((ele , key) => {
        console.log(ele);
        if(ele.active){
          return <AcceptTask key={key} cardInfo={ele}></AcceptTask>
        }
        else if(ele.completed){
          return  <CompleteTask key={key} cardInfo={ele}></CompleteTask>
        }
        else if(ele.failed){
          return <FailedTask key={key} cardInfo={ele}></FailedTask>
        }
        else{
          return <NewTask key={key} cardInfo={ele}></NewTask>
        }
      })}
    </div>
  );
}

export default TasksList;
