//src/App.tsx
import React, { useState } from "react";
import InputField from "./components/InputField";
import type { Task } from "./models";
import TaskList from "./components/TaskList";
import { DragDropContext } from "@hello-pangea/dnd";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), isDone: false, text: task }]);
      setTask("");
    }
  };
  return (
    <DragDropContext onDragEnd={()=>{}}>
    <div className="bg-teal w-screen h-screen flex flex-col items-center">
      <span className="font-Neucha text-4xl text-white my-7.5 mx-0 uppercase z-1 text-center">
        Tasking
      </span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />

      <TaskList tasks={tasks} setTasks={setTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
    </div>
    </DragDropContext>
  );
};

export default App;
