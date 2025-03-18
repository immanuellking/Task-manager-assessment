import { useState } from "react";
import TaskModal from "../tasks/TaskModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className="border-b border-gray-600 px-4 py-6 lg:p-8 flex justify-between items-center">
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-white hidden sm:block font-semibold lg:font-bold text-2xl lg:text-3xl m-0 p-0">
            Task Manager
          </h1>
          <h1 className="text-white sm:hidden block text-base font-semibold">
            TM
          </h1>
        </div>
        <div className="flex-1">
          <button
            className="bg-[#4338ca] text-white text-base font-medium px-3 sm:px-6 py-2 rounded-md hover:opacity-90 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Add Task
          </button>
        </div>
      </header>
      <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
