
import { Routes, Route } from "react-router";
import { UsersPage } from "../pages/users";
import { TasksPage } from "../pages/tasks";

// fetch("http://localhost:3001/users").then((res) => {
//   console.log(res)
// });

export default function App() {
  return (
    <Routes>
      <Route index element={<UsersPage />} />
      <Route path="/:userId/tasks" element={<TasksPage />} />
    </Routes>
  )

}
