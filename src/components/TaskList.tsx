import { TaskCard } from "./TaskCard";
import { Task } from "../shared/api";



export function TaskList() {
  const tasks = [] as Task[];

  return (
    <ul className="flex flex-col">
      {tasks.map((task) => (
        < TaskCard key={task.id} task={task} />
      ))}
    </ul>
  )
}