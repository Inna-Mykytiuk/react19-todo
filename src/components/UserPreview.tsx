import { use } from "react";
import { useUsersGlobal } from "../entities/user";

export function UserPreview({ userId }: { userId: string }) {
  const { usersPromise } = useUsersGlobal();
  const users = use(usersPromise);
  return <span>{users.find((u) => u.id === userId)?.email}</span>;
}