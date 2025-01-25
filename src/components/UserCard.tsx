
import { useTransition } from "react";
import { User } from "../shared/api"
import { deleteUser } from "../shared/api";

export function UserCard({ user, refetchUsers }: { user: User, refetchUsers: () => void }) {
  const [isPending, startTransition] = useTransition();


  const handleDelete = async () => {
    startTransition(async () => {
      await deleteUser(user.id);
      refetchUsers();
    });

  };

  return (
    <li key={user.id} className="border p-2 my-2 rounded bg-gray-100 flex justify-between items-center">
      {user.email}
      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded disabled:bg-gray-400"
      >
        Delete
      </button>
    </li>
  )
}