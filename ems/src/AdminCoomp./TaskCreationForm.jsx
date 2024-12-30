import React, { useState } from "react";
import axios from "axios";

function TaskCreationForm({ setReRendering, reRendering }) {
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [assigne, setAssigne] = useState("");
  let [category, setCategory] = useState("");
  let [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let [generalWarning, setGeneralWarning] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      title == "" ||
      date == "" ||
      assigne == "" ||
      category == "" ||
      description == ""
    ) {
      setGeneralWarning(true);
      return;
    } else {
      setGeneralWarning(false);
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/user/assigne",
        {
          title,
          description,
          date: new Date(date),
          category,
          assignee: assigne,
        }
      );

      setTimeout(() => {
        setTitle("");
        setDate("");
        setCategory("");
        setDescription("");
        setAssigne("");
      }, 1000);
      setSuccess("task added successful");
      setError("");

      setTimeout(() => {
        setSuccess("");
      }, 1500);

      setReRendering(!reRendering);
    } catch (err) {
      setError("task addition unsuccessful");
      setSuccess("");
    }
  };

  return (
    <div className="p-4 md:p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitForm}
        className="flex flex-col md:flex-row flex-wrap w-full items-start justify-between"
      >
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
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

        <div className="w-full md:w-2/5">
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
      {generalWarning && (
        <div className="text-red-500 font-semibold items-center flex justify-center">
          Please fill all the fields
        </div>
      )}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
    </div>
  );
}

export default TaskCreationForm;
