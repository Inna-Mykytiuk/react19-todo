import { Task } from "../shared/api";

export function TaskCard({ task }: { task: Task }) {

  return (
    <li key={task.id} className="border p-2 my-2 rounded bg-gray-100 flex justify-between items-center">
      {task.title}
      <form>
        <input type="hidden" name="id" value={task.id} />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded disabled:bg-gray-400"
        >
          Delete
        </button>
      </form>
    </li>
  )
}