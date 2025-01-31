import { createUser, deleteUser } from "../../shared/api";

type CreateActionState = {
  email: string;
  error?: string;
};

export type CreateUserAction = (
  state: CreateActionState,
  formData: FormData
) => Promise<CreateActionState>;

export function createUserAction({
  refetchUsers,
}: {
  refetchUsers: () => void;
}): CreateUserAction {
  return async (_, formData) => {
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

export type DeleteUserAction = (
  state: DeleteUserActionState,
  formData: FormData
) => Promise<DeleteUserActionState>;

export function deleteUserAction({
  refetchUsers,
}: {
  refetchUsers: () => void;
}): DeleteUserAction {
  return async (_, formData) => {
    const id = formData.get("id") as string;
    try {
      await deleteUser(id);
      refetchUsers();
      return {};
    } catch {
      return {
        error: "Error while deleting user",
      };
    }
  };
}
