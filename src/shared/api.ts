export type User = {
  id: string;
  email: string;
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

export function fetchTasks() {
  return fetch("http://localhost:3001/tasks")
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
