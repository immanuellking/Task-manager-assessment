export default function Header() {
  return (
    <header className="border-b border-gray-600 p-8 flex justify-between items-center">
      <div className="flex-1">
        <button className="bg-[#4338ca] text-white text-base font-medium px-6 py-2 rounded-md hover:opacity-90 cursor-pointer">
          Add Task
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-white font-bold text-3xl m-0 p-0">Task Manager</h1>
      </div>

      <div className="flex-1 flex justify-end">
        <input
          type="search"
          name="search_task"
          placeholder="search task....."
          className="w-64 bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </div>
    </header>
  );
}
