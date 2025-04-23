"use client";
import React, { useState } from "react";
import TaskForm from "./Components/TaskForm";
import { FaRegListAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-zinc-800 w-full h-screen">
      <div className="text-[40px] flex items-center justify-center pt-3 text-zinc-300 font-semibold">
        <FaRegListAlt/><p className="px-4">My To Do List</p>
      </div>
      <TaskForm />
    </div>
  );
};

export default page;
