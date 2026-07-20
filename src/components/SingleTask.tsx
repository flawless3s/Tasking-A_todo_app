import React, { useEffect, useRef, useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task,
      ),
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      key={key}
      className="flex w-[29.5%] rounded-[5px] p-5 mt-3.75 bg-orangish"
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      {edit ? (
        <input
          value={editText}
          ref={inputRef}
          onChange={(e) => setEditText(e.target.value)}
          className="outline-none bg-white"
        />
      ) : task.isDone ? (
        <s className="flex-1 p-1.25 text-xl">{task.text}</s>
      ) : (
        <span className="flex-1 p-1.25 text-xl">{task.text}</span>
      )}

      <div className="flex items-center gap-3">
        <FaEdit
          className="ml-2.5 size-6.25 cursor-pointer"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(true);
            }
          }}
        />
        <MdDelete
          className="ml-2.5 size-6.25 cursor-pointer"
          onClick={() => handleDelete(task.id)}
        />
        <FaCheck
          className="ml-2.5 size-6.25 cursor-pointer"
          onClick={() => handleDone(task.id)}
        />
      </div>
    </form>
  );
};

export default SingleTask;
