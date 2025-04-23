import React, { useRef, useState } from "react";
import { FaTasks } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { motion } from "motion/react"

const form = () => {
  const reference = useRef(null);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  let renderTask = <h1 className="text-3xl font-bold text-zinc-900 mt-20 ml-150">No Task Available.</h1>;

  const deleteHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    settask(copyTask);
  };

  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      return (
        <motion.div drag dragConstraints={reference} key={i} className="relative w-50 h-fit rounded-[40px] bg-zinc-900/70 py-6 px-4 m-4 text-zinc-300 overflow-hidden">
          <div className="mb-5 p-4">
            <div className="flex gap-1 items-center"><FaTasks /> <p>Task {i+1}</p> </div>
            <p className="text-3xl break-words line-clamp-3">{t.title}</p>
            <p className="text-2xl break-words line-clamp-3">{t.desc}</p>
          </div>
          <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              if (confirm("Have You Completed The Task?")) {
                deleteHandler(i);
              }
            }}
            className="bg-zinc-900 px-4 py-3 text-zinc-200 rounded-xl border-2 hover:bg-zinc-700 duration-300 flex items-center gap-1"
          >
            Delete <MdOutlineDelete/>
          </button>
          </div>
        </motion.div>
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
        <button className="bg-zinc-900 hover:bg-zinc-700 duration-300 flex items-center gap-1 px-4 py-3 text-zinc-300 rounded-xl m-5 border-2">
          Add Task <IoIosArrowForward className="text-xl"/>
        </button>
      </form>
      <div ref={reference} className="fixed flex flex-wrap w-full h-screen">
        {renderTask}
      </div>
    </>
  );
};

export default form;
