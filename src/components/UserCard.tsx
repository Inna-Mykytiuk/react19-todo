
import { User } from "../shared/api"

export function UserCard({ user }: { user: User }) {
  return (
    <li key={user.id} className="border p-2 my-2 rounded bg-gray-100 flex justify-between items-center">
      {user.email}
      <button
        type="button"
        onClick={() => { }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    </li>
  )
}