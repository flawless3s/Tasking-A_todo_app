//src/App.tsx
import React, { useEffect, useState } from "react";
import InputField from "./components/InputField";
import type { Task } from "./models/models";
import TaskList from "./components/TaskList";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(0);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), isDone: false, text: task }]);
      setTask("");
    }
  };

  useEffect(() => {
    setCount(tasks.length);
    setCompletedCount(completedTasks.length);
  }, [task, completedTasks]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add: Task,
      active = [...tasks],
      completed = [...completedTasks];

    if (source?.droppableId === "Active_tasks") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "Active_tasks") {
      add = { ...add, isDone: !add.isDone };
      active.splice(destination.index, 0, add);
    } else {
      add = { ...add, isDone: !add.isDone };
      completed.splice(destination.index, 0, add);
    }

    setTasks(active);
    setCompletedTasks(completed);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-teal w-screen h-screen flex flex-col items-center">
        <span className="font-Neucha text-4xl text-white my-7.5 mx-0 uppercase z-1 text-center">
          Tasking
        </span>
        <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
        <div className="w-screen flex px-7 gap-12 mt-1">
          <span className="w-[50%] px-3.75 font-Neucha text-lg text-white">
            Count: {count}
          </span>
          <span className="w-[50%] px-3.75 font-Neucha text-lg text-white">
            Count: {completedCount}
          </span>
        </div>

        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
