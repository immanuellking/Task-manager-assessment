function TaskFilterBar() {
  return (
    <div className="flex justify-between">
        <div className="text-white">
            1 of 3 Done
        </div>

        <div>
            <select name="filter" className="bg-[#4338ca] text-white text-center border border-slate-200 px-2 py-1 capitalize focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                <option value="">filter</option>
                <option value="todo">to do</option>
                <option value="inProgress">in progress</option>
                <option value="done">done</option>
            </select>
        </div>
    </div>
  )
}

export default TaskFilterBar