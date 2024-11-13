import React, { useState } from "react";

function TaskCreationForm({ allUserData, handelUpdatingTask }) {
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [assigne, setAssigne] = useState("");
  let [category, setCategory] = useState("");
  let [description, setDescription] = useState("");

  let [invalidUserWarning, setInvalidUserWarning] = useState(false);

  let[generalWarning , setGeneralWarning] = useState(false);


  const submitForm = (e) => {
    e.preventDefault();

    if(title == "" || date == "" || assigne == ""|| category=="" || description ==""){
      setGeneralWarning(true)
      console.log(generalWarning)
      return
    }
    else{
      setGeneralWarning(false);
      console.log(generalWarning)
    }


    const newtask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category,
    };

    const existingUserCheck = allUserData.findIndex(
      (employee) => employee.firstName == assigne
    );

    let updatedAllUserData;

    if (existingUserCheck != -1) {
      updatedAllUserData = allUserData.map((ele, indx) => {
        if (indx == existingUserCheck) {
          return {
            ...ele,
            tasks: [...ele.tasks, newtask],
            taskCounts: {
              ...ele.taskCounts,
              active: ele.taskCounts.active + 1,
              newTask: ele.taskCounts.newTask + 1,
            },
          };
        }
        return ele;
      });

      localStorage.setItem("employees", JSON.stringify(updatedAllUserData));
      handelUpdatingTask(updatedAllUserData);
      setInvalidUserWarning(false);

    } else {
      setInvalidUserWarning(true);
    }


    
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitForm}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-1"
              type="text"
              placeholder="employee name"
              value={assigne}
              onChange={(e) => setAssigne(e.target.value)}
            />
            {invalidUserWarning && (
              <div className="text-red-600 font-semibold">
                The Above User Does Not Exist
              </div>
            )}
          </div>
          <div className="mt-3">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400  mb-4"
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
      {generalWarning && <div className="text-red-500 font-semibold items-center flex justify-center">Please fill all the fields</div>}
    </div>
  );
}

export default TaskCreationForm;
