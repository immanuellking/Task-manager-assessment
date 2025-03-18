import TaskList from "../tasks/TaskList";
import Header from "./Header";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-black">
        <Header />
        <TaskList />
    </div>
  )
}
