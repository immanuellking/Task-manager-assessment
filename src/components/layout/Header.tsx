import { useEffect, useState } from "react";
import TaskModal from "../tasks/TaskModal";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { toggleDarkMode } from "../../store/themeSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.themeReducer.darkMode);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("dark mode", darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="dark:border-b dark:border-gray-600 shadow-sm px-4 py-6 lg:p-8 flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          <h1 className="dark:text-white text-black hidden sm:block font-semibold lg:font-bold text-2xl lg:text-3xl m-0 p-0">
            Task Manager
          </h1>
          <h1 className="dark:text-white text-blacke sm:hidden block text-xl font-semibold">
            TM
          </h1>
        </div>
        <div className="">
          <button
            className="bg-[#4338ca] text-white text-base font-medium px-3 sm:px-6 py-2 rounded-md hover:opacity-90 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Add Task
          </button>

          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 rounded text-2xl"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
      <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
