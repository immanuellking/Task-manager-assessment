import { useEffect, useState } from "react";
import {
  Task,
  addTask,
  tasksSelector,
  updateTask,
  clearEditingTask,
} from "../../store/tasksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

export default function TaskModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [status, setStatus] = useState<"to do" | "in progress" | "done">("to do");

  const dispatch = useAppDispatch();
  const { editingTask } = useAppSelector(tasksSelector);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing && editingTask) {
      const editedTask: Task = {
        id: editingTask?.id,
        title: title.trim(),
        description: description?.trim(),
        status: status,
      };
      dispatch(updateTask(editedTask));
    }

    if (!isEditing) {
      const task: Task = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description?.trim(),
        status: "to do",
      };
      dispatch(addTask(task));
    }

    closeModal()
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as "to do" | "in progress" | "done");
  };

  const closeModal = () => {
    dispatch(clearEditingTask()); 
    setTitle(""); 
    setDescription(""); 
    setStatus("to do");
    setIsEditing(false);
    setIsOpen(false);
  };

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || ""); 
      setStatus(editingTask.status);
      setIsEditing(true);
    } else {
    dispatch(clearEditingTask()); 
      setTitle(""); 
      setDescription(""); 
      setStatus("to do");
      setIsEditing(false);
    }
  }, [editingTask]);

  return (
    <div
      className={`${
        isOpen
          ? "absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className="z-50">
        <form
          onSubmit={handleSubmit}
          className="p-4 py-8 sm:p-8 space-y-4 bg-black rounded-lg shadow-lg m-auto w-[90%] sm:w-[40rem]"
        >
          <h1 className="text-white text-2xl font-semibold">
            {isEditing ? "Edit Task" : "Add New Task"}
          </h1>

          <div className="mb-8">
            <label className="block mb-2 font-medium text-white">Title</label>

            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-white">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-white">
              Description
            </label>
            <select
              className="border text-sm rounded-lg block text-white bg-gray-700 border-gray-600 w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              name="status"
              value={status}
              onChange={handleStatusChange}
              disabled={!isEditing}
            >
              <option value="to do">To do</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2 mt-8">
            <button
              type="button"
              className="bg-red-500 py-1.5 px-6 text-white rounded-b-sm cursor-pointer hover:bg-red-500/90"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#4338ca] py-1.5 px-6 text-white rounded-b-sm cursor-pointer hover:bg-[#4338ca]/90"
            >
              {isEditing ? "Update" : "Add"} Task
            </button>
          </div>
        </form>
      </div>
      <div
        className="bg-white/30 absolute top-0 left-0 bottom-0 right-0"
        onClick={closeModal}
      ></div>
    </div>
  );
}
