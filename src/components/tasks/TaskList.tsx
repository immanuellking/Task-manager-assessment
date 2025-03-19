import { useAppSelector } from "../../store/hook";
import { filteredTasksSelector } from "../../store/tasksSlice";
import TaskFilterBar from "./TaskFilterBar";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const filteredTasks = useAppSelector(filteredTasksSelector);
  return (
    <section className="px-4 py-8 lg:p-8 space-y-8">
      <TaskFilterBar />
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
