import { Suspense, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router";
import { useTasks } from "./use-tasks";
import { useSort } from "./useSort";
import { useSearch } from "./useSearch";
import { CreateTaskForm } from "../../components/CreateTaskForm";
import { TasksList } from "../../components/TaskList";
import { Pagination } from "../../components/Pagination";
import { SearchSortControls } from "../../components/SearchSortControls";

export default function TasksPage() {
  const { userId = "" } = useParams();

  const {
    paginatedTasksPromise,
    refetchTasks,
    defaultCreatedAtSort,
    defaultSearch,
  } = useTasks({ userId });

  const { search, handleChangeSearch } = useSearch(defaultSearch, (title) =>
    refetchTasks({ title })
  );

  const { sort, handleChangeSort } = useSort(defaultCreatedAtSort, (sort) =>
    refetchTasks({ createdAtSortNew: sort as "asc" | "desc" })
  );

  const onPageChange = async (newPage: number) => {
    refetchTasks({ page: newPage });
  };

  const tasksPromise = useMemo(
    () => paginatedTasksPromise.then((r) => r.data),
    [paginatedTasksPromise]
  );

  return (
    <main className="container mx-auto p-4 pt-10 flex flex-col gap-4">
      <h1 className="text-3xl font-bold underline">Tasks</h1>
      <CreateTaskForm refetchTasks={() => refetchTasks({})} userId={userId} />
      <SearchSortControls
        search={search}
        sort={sort}
        handleChangeSearch={handleChangeSearch}
        handleChangeSort={handleChangeSort}
      />
      <ErrorBoundary
        fallbackRender={(e) => (
          <div className="text-red-500">
            Something went wrong:{JSON.stringify(e)}{" "}
          </div>
        )}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <TasksList
            tasksPromise={tasksPromise}
            refetchTasks={() => refetchTasks({})}
          />
          <Pagination
            tasksPaginated={paginatedTasksPromise}
            onPageChange={onPageChange}
          />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}