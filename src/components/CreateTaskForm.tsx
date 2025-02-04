// import { useActionState, useOptimistic, useRef } from "react";
// import { CreateUserAction } from "../pages/users/actions";

export function CreateTaskForm() {



  return (
    <form className="flex gap-2"

    >
      <input
        name="email"
        type="email"
        className="border p-2 rounded w-full"
        placeholder="Enter email"


      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Submit
      </button>
      <div className="text-red-600">Еrror</div>
    </form>
  );
}