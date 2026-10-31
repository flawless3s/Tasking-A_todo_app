import React from "react";
import type { Task } from "../models";
import SingleTask from "./SingleTask";
import { Droppable } from "@hello-pangea/dnd";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({
  completedTasks,
  setCompletedTasks,
  tasks,
  setTasks,
}) => {
  return (
    <div className="flex justify-between mt-1.5 items-start w-[95%]">
      <Droppable droppableId="Active_tasks">
        {(provided, snapshot) => {
          return (
            <div
              className={`flex flex-col w-[47.5%] p-3.75 rounded-[5px]  ${snapshot.isDraggingOver ? "bg-[rgb(204,135,71)]" : "bg-[rgb(184,115,51)]"}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="font-Neucha text-3xl text-white">
                {" "}
                Active Tasks{" "}
              </span>
              {tasks.map((task, index) => (
                <SingleTask
                  index={index}
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>

      <Droppable droppableId="Completed_tasks">
        {(provided, snapshot) => {
          return (
            <div
              className={`flex flex-col w-[47.5%] p-3.75 rounded-[5px] ${snapshot.isDraggingOver ? "bg-red-500" : "bg-red-600"}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="font-Neucha text-3xl text-white">
                {" "}
                Completed Tasks{" "}
              </span>
              {completedTasks.map((task, index) => (
                <SingleTask
                  index={index}
                  task={task}
                  key={task.id}
                  tasks={completedTasks}
                  setTasks={setCompletedTasks}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default TaskList;
