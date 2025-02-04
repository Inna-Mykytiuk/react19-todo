import { User } from "../shared/api";
import { UserCard } from "./UserCard";
import { DeleteUserAction } from "../pages/users/actions";


export function TaskList({ useUsersList, deleteUserAction }: { useUsersList: () => User[], deleteUserAction: DeleteUserAction }) {
  const users = useUsersList();

  return (
    <ul className="flex flex-col">
      {users.map((user) => (
        <UserCard key={user.id} user={user} deleteUserAction={deleteUserAction} />
      ))}
    </ul>
  )
}