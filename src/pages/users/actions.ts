import { createUser, deleteUser } from "../../shared/api";

type CreateActionState = {
  email: string;
  error?: string;
};

export function createUserAction({
  refetchUsers,
}: {
  refetchUsers: () => void;
}) {
  return async function (
    _: CreateActionState,
    formData: FormData
  ): Promise<CreateActionState> {
    const email = formData.get("email") as string;

    if (email === "admin@gmail.com") {
      return {
        error: "Admin email is not allowed",
        email,
      };
    }

    try {
      await createUser({
        email,
        id: crypto.randomUUID(),
      });
      refetchUsers();

      return {
        email,
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return {
        email,
        error: "Error creating user",
      };
    }
  };
}

type DeleteUserActionState = {
  error?: string;
};

export function deleteUserAction({
  refetchUsers,
  id,
}: {
  refetchUsers: () => void;
  id: string;
}) {
  return async function (): Promise<DeleteUserActionState> {
    try {
      await deleteUser(id);
      refetchUsers();
      return {};
    } catch {
      return { error: "Error deleting user" };
    }
  };
}
