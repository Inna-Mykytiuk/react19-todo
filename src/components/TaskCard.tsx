import { useActionState } from "react";
import { User } from "../shared/api"
import { DeleteUserAction } from "../pages/users/actions";


export function TaskCard({ user, deleteUserAction }: { user: User, deleteUserAction: DeleteUserAction }) {

  const [state, handleDelete] = useActionState(deleteUserAction, {});

  return (
    <li key={user.id} className="border p-2 my-2 rounded bg-gray-100 flex justify-between items-center">
      {user.email}
      <form action={handleDelete}>
        <input type="hidden" name="id" value={user.id} />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded disabled:bg-gray-400"
        >
          Delete
          {state.error && <div className="text-red-600">{state.error}</div>}
        </button>
      </form>
    </li>
  )
}