import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useUsers } from "./use-users";

import { CreateUserForm } from "../../components/CreateUserForm";
import { UsersList } from "../../components/UserList";


export function UsersPage() {
  const [usersPromise, refetchUsers] = useUsers();

  return (
    <section className="flex flex-col ">
      <div className="container mx-auto p-4 pt-10 gap-4 max-w-[600px]">
        <h1 className="text-3xl font-bold mb-10">Users Page</h1>
        <CreateUserForm refetchUsers={refetchUsers} />
        <ErrorBoundary fallbackRender={({ error }) => <div className="text-red-600">{error.message}</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <UsersList usersPromise={usersPromise} refetchUsers={refetchUsers} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
}
