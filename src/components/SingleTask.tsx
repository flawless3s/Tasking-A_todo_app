import React, { useEffect, useRef, useState } from "react";
import type { Task } from "../models/models";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";

type SingleTaskProps = {
  task: Task;
  key: number;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  index: number;
};

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  key,
  tasks,
  setTasks,
  index,
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
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <form
          key={key}
          className="flex rounded-[5px] p-5 mt-3.75 bg-yellowish transition duration-200 hover:shadow-[0_0_5px_black] hover:scale-[1.03]"
          ref={provided.innerRef}
          onSubmit={(e) => handleEdit(e, task.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input
              value={editText}
              ref={inputRef}
              onChange={(e) => setEditText(e.target.value)}
              className="outline-none bg-white w-full"
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
      )}
    </Draggable>
  );
};

export default SingleTask;
