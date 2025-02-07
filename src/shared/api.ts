export type User = {
  id: string;
  email: string;
};

export type Task = {
  id: string;
  userId: string;
  title: string;
  // done: boolean;
  done: string;
  createAt: string;
};
export function fetchUsers() {
  return fetch("http://localhost:3001/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json() as Promise<User[]>;
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
}

export function createUser(user: User) {
  return fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Failed to create user: ${res.status} ${res.statusText}`
        );
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      throw error;
    });
}

export function deleteUser(id: string) {
  return fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Failed to delete user: ${res.status} ${res.statusText}`
        );
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
}

export function fetchTasks({
  page = 1,
  per_page = 10,
  sort = { createdAt: "asc" },
  filters,
}: {
  page?: number;
  per_page?: number;
  filters?: {
    userId?: string;
  };
  sort?: {
    createdAt: "asc" | "desc";
  };
}) {
  return fetch(
    `http://localhost:3001/tasks?_page=${page}&_per_page=${per_page}&_sort=${
      sort.createdAt === "asc" ? "createdAt" : "-createdAt"
    }&userId=${filters?.userId}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Failed to fetch tasks: ${res.status} ${res.statusText}`
        );
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      throw error;
    });
}

export function createTask(task: Omit<Task, "id" | "createdAt">) {
  return fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
}

export function updateTask(id: string, task: Partial<Task>) {
  return fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
}

export function deleteTask(id: string) {
  return fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
