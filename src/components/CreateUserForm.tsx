import { useActionState, useOptimistic, useRef } from "react";
import { CreateUserAction } from "../pages/users/actions";

export function CreateUserForm({ createUserAction }: { createUserAction: CreateUserAction }) {

  const [state, dispatch] = useActionState(createUserAction, { email: "" });

  const [optimisticState, setOptimisticState] = useOptimistic(state);

  const form = useRef<HTMLFormElement>(null);

  return (
    <form className="flex gap-2"
      ref={form}
      action={(formData: FormData) => {
        setOptimisticState({ email: "" })
        dispatch(formData)
        form.current?.reset();
      }}
    >
      <input
        key={optimisticState.email}
        name="email"
        type="email"
        className="border p-2 rounded w-full"
        placeholder="Enter email"
        defaultValue={optimisticState.email}

      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Submit
      </button>
      {optimisticState.error && (
        <div className="text-red-600">{optimisticState.error}</div>
      )}
    </form>
  );
}