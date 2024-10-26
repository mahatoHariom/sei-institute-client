import { IRegisterUser } from "@/schema/users";
import registerUser from "@/services/users";
// import { registerUser } from "@/services/users";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

export function useRegisterUser() {
  return useMutation((data: IRegisterUser) => registerUser(data), {
    onSuccess: (response: User) => {
      console.log("Registration successful:", response);
    },
    onError: (error: Error) => {
      console.error("Registration error:", error);
    },
  });
}
==