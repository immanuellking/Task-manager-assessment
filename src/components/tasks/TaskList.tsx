import TaskFilterBar from "./TaskFilterBar";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <section className="px-4 lg:p-8">
        <TaskFilterBar />
        <div className="flex gap-4 flex-wrap">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    </section>
  )
}
