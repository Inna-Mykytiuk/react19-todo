import { use } from "react";
import { User } from "../shared/api";
import { UserCard } from "./UserCard";

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