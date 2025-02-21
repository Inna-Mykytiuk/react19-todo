
import { Routes, Route } from "react-router";
import UsersPage from "../pages/users/page";
import TasksPage from "../pages/tasks/page";
import { UsersProvider } from "../entities/user";


export default function App() {
  return (
    <UsersProvider>
      <Routes>
        <Route index element={<UsersPage />} />
        <Route path="/:userId/tasks" element={<TasksPage />} />
      </Routes>
    </UsersProvider>

  )

}
