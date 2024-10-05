import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z.string().min(1, { message: "First Name is required" }),
  email: z.string(),
  password: z.string().min(3, { message: "Password is must be 3 length" }),
});
export const userLoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(3, { message: "Email is required" }),
});

export type ILoginUser = z.infer<typeof userLoginSchema>;
export type IRegisterUser = z.infer<typeof userRegisterSchema>;
