import React from "react";
import type { Task } from "../models";
import SingleTask from "./SingleTask";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div className="flex justify-evenly flex-wrap w-[90%]">
      {tasks.map((task, index) => (
        <SingleTask task={task} key={index} tasks={tasks} setTasks={setTasks}/>
      ))}
    </div>
  );
};

export default TaskList;
