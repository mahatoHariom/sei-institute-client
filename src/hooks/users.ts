/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignUpFormData } from "@/schema/signup-schema";
// import { IRegisterUser } from "@/schema/users";
import registerUser from "@/services/users";
import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (values: SignUpFormData) => registerUser(values),
  });
};
