import TaskFilterBar from "./TaskFilterBar";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <section className="px-4 py-8 lg:p-8 space-y-8">
        <TaskFilterBar />
        <div className="flex justify-center sm:gap-x-4 gap-y-6 flex-wrap">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    </section>
  )
}
