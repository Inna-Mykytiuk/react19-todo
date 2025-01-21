import { useState } from "react";

type User = {
  id: string,
  email: string,
}

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:3001/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // });
    // const data = await response.json();
    setUsers([...users, { id: crypto.randomUUID(), email }]);
    setEmail("");
  };

  return (

    <section className="flex flex-col ">
      <div className="container mx-auto p-4 pt-10 gap-4 max-w-[600px]">
        <div>
          <h1 className="text-3xl font-bold mb-10">Users Page</h1>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
        <div>
          <ul className="flex flex-col">
            {users.map((user) => (
              <li key={user.id} className="border p-2 my-2 rounded bg-gray/100">
                {user.email}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>

  )
}
