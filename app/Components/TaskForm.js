import React, { useState } from "react";

const form = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  let renderTask = <h2 className="text-xl">No Task Available.</h2>;

  const deleteHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    settask(copyTask);
  };

  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      return (
        <li key={i} className="flex justify-evenly">
          <div className="flex justify-evenly mb-5 p-4 w-2/3">
            <p className="text-3xl">{t.title}</p>
            <p className="text-2xl">{t.desc}</p>
          </div>
          <button
            onClick={() => {
              {confirm("Have You Completed The Task?") ? deleteHandler() : null}
            }}
            className="bg-zinc-900 px-4 py-3 text-zinc-200 rounded-xl m-5 border-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(title===""){
      alert("Add Some Task")
    }
    else{
      settask([...task, { title, desc }]);
      console.log(task);
      settitle("");
      setdesc("");
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter Title"
          className="border-2 text-zinc-300 border-zinc-300 m-5 px-4 py-2 rounded-xl placeholder:text-zinc-300"
          value={title}
          onChange={(ele) => {
            settitle(ele.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border-2 text-zinc-300 border-zinc-300 m-5 px-4 py-2 rounded-xl placeholder:text-zinc-300"
          value={desc}
          onChange={(ele) => {
            setdesc(ele.target.value);
          }}
        />
        <button className="bg-zinc-900 px-4 py-3 text-zinc-300 rounded-xl m-5 border-2">
          Add Task
        </button>
      </form>
      <div className="text-center bg-zinc-400 font-semibold py-4">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default form;
