import { useState, use, Suspense } from "react";
import { User } from "../../shared/api";
import { fetchUsers, createUser } from "../../shared/api";

const defaultUsersPromise = fetchUsers();

export function UsersPage() {

  const [usersPromise, setUsersPromise] = useState(defaultUsersPromise);
  const refetchUsers = () => setUsersPromise(fetchUsers());

  return (
    <section className="flex flex-col ">
      <div className="container mx-auto p-4 pt-10 gap-4 max-w-[600px]">
        <h1 className="text-3xl font-bold mb-10">Users Page</h1>
        <CreateUserForm refetchUsers={refetchUsers} />
        <Suspense fallback={<div>Loading...</div>}>
          <UsersList usersPromise={usersPromise} />
        </Suspense>
      </div>
    </section>
  );
}


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

export function UsersList({ usersPromise }: { usersPromise: Promise<User[]> }) {
  const users = use(usersPromise);
  return (
    <ul className="flex flex-col">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

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