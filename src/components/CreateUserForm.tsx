import { useState } from "react";
import { createUser } from "../shared/api";

export function CreateUserForm({ refetchUsers }: { refetchUsers: () => void }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({
      email,
      id: crypto.randomUUID()
    });
    refetchUsers();
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" >
      <input
        type="email"
        value={""}
        onChange={() => { }}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  )
}