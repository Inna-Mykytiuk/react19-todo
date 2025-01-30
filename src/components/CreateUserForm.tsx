import { useActionState } from "react";
import { createUserAction } from "../pages/users/actions";

export function CreateUserForm({ refetchUsers }: { refetchUsers: () => void }) {

  const [state, dispatch, isPending] = useActionState(createUserAction({ refetchUsers }), { email: "" });

  return (
    <form action={dispatch} className="flex gap-2">
      <input
        name="email"
        type="email"
        className="border p-2 rounded w-full"
        placeholder="Enter email"
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Submit
      </button>
      {state.error && <div className="text-red-600">{state.error}</div>}
    </form>
  );
}