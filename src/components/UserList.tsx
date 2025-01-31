import { use } from "react";
import { User } from "../shared/api";
import { UserCard } from "./UserCard";
import { DeleteUserAction } from "../pages/users/actions";

export function UsersList({ usersPromise, deleteUserAction }: { usersPromise: Promise<User[]>, deleteUserAction: DeleteUserAction }) {
  const users = use(usersPromise);

  return (
    <ul className="flex flex-col">
      {users.map((user) => (
        <UserCard key={user.id} user={user} deleteUserAction={deleteUserAction} />
      ))}
    </ul>
  )
}