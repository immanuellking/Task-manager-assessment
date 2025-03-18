import { useState } from "react";
import { Task, setEditingTask, deleteTask } from "../../store/tasksSlice";
import { useAppDispatch } from "../../store/hook";
import TaskModal from "./TaskModal";

export default function TaskItem({ task }: { task: Task }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleEditingTask = () => {
    dispatch(setEditingTask(task));
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-[#1E1E22] p-4 rounded-s-sm">
        <div className="flex justify-end">
          <div
            className={`bg-[#4338ca] text-xs text-white text-center py-1 px-3 rounded-sm ${
              task.status === "done" && "bg-green-500"
            }
            ${task.status === "in progress" && "bg-orange-400"}
            `}
          >
            {task.status}
          </div>
        </div>
        <div className="text-white my-4">
          <h3 className="text-xl font-semibold mb-2 capitalize">
            {task.title}
          </h3>
          <p className="text-sm text-slate-400">{task.description}</p>
        </div>
        <div className="flex justify-end gap-3">
          <div
            className="hover:bg-[rgba(51,51,56,1)] rounded-full transition-all duration-150 ease-in cursor-pointer"
            onClick={handleEditingTask}
          >
            <svg
              className="p-2 w-[2.2rem]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </div>
          <div
            className="hover:bg-[rgba(51,51,56,1)] rounded-full transition-all duration-150 ease-in cursor-pointer"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <svg
              className="p-2 w-[2.2rem]"
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 482.428 482.429"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"></path>{" "}
                    <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"></path>{" "}
                    <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"></path>{" "}
                    <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
