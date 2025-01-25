import { useState, useTransition } from "react";
import { createUser } from "../shared/api";

export function CreateUserForm({ refetchUsers }: { refetchUsers: () => void }) {
  const [email, setEmail] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      await createUser({
        email,
        id: crypto.randomUUID(),
      });
      startTransition(() => {
        refetchUsers();
        setEmail("");
      })
    });

  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
    </form>
  );
}