import { SignUpFormData } from "@/schema/users/signup-schema";
import registerUser from "@/services/users";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (values: SignUpFormData) => registerUser(values),
  });
};
