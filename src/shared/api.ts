export type User = {
  id: string;
  email: string;
};

export function fetchUsers() {
  return fetch("https://localhost:3001/users").then(
    (res) => res.json() as Promise<User[]>
  );
}

export function createUser(user: User) {
  return fetch("https://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
}

export function deleteUser(id: string) {
  return fetch(`https://localhost:3001/users/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function fetchTasks() {
  return fetch("https://localhost:3001/tasks").then((res) => res.json());
}
