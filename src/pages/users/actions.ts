import { createUser } from "../../shared/api";

type CreateActionState = {
  // defaultEmail: string;
  error?: string;
};

export const createUserAction =
  ({ refetchUsers }: { refetchUsers: () => void }) =>
  async (
    prevState: CreateActionState,
    formData: FormData
  ): Promise<CreateActionState> => {
    const email = formData.get("email") as string;

    try {
      await createUser({
        email,
        id: crypto.randomUUID(),
      });
      refetchUsers();

      return {
        // defaultEmail: "",
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return {
        // defaultEmail: prevState.defaultEmail,
        error: "Error creating user",
      };
    }
  };
