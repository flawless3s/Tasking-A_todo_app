import React from "react";
import type { Task } from "../models";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type SingleTaskProps = {
  task: Task;
  key: number;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  key,
  tasks,
  setTasks,
}) => {
  return (
    <div
      key={key}
      className="flex w-[29.5%] rounded-[5px] p-5 mt-3.75 bg-orangish"
    >
      <span className="flex-1 p-1.25 text-xl">
        {task.text}
      </span>
      <div className="flex items-center gap-3">
        <FaEdit className="ml-2.5 size-6.25 cursor-pointer" />
        <MdDelete className="ml-2.5 size-6.25 cursor-pointer" />
        <FaCheck className="ml-2.5 size-6.25 cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleTask;
