import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Task, setFilterStatus, tasksSelector } from "../../store/tasksSlice";

function TaskFilterBar() {
  const dispatch = useAppDispatch();
  const { filterStatus, tasks } = useAppSelector(tasksSelector);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setFilterStatus(e.target.value as "to do" | "in progress" | "done")
    );
    // dispatch(filterTask(filter));
  };

  const completedTasks = tasks.filter(
    (task: Task) => task.status === "done"
  ).length;

  return (
    <div className="flex justify-between">
      <div className="dark:text-white">
        {completedTasks} of {tasks.length} Done
      </div>

      <div>
        <select
          name="filter"
          className="bg-[#4338ca] text-white text-center border border-slate-200 px-2 py-1 capitalize focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          value={filterStatus}
          onChange={handleStatusChange}
        >
          <option value="all">ALL</option>
          <option value="to do">to do</option>
          <option value="in progress">in progress</option>
          <option value="done">done</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilterBar;
