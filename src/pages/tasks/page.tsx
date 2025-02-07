import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TaskList } from "../../components/TaskList";



export function TaskPage() {

  return (
    <section className="flex flex-col ">
      <div className="container mx-auto p-4 pt-10 gap-4 max-w-[600px]">
        <h1 className="text-3xl font-bold mb-10">Users Page</h1>
        {/* <CreateUserForm /> */}
        <ErrorBoundary fallbackRender={({ error }) => <div className="text-red-600">{error.message}</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <TaskList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
}