/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios-instance";
import { SignUpFormData } from "@/schema/signup-schema";
import { ILoginUser } from "@/schema/users";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";

export default async function registerUser(
  values: SignUpFormData
): Promise<AxiosResponse<User>> {
  return await api.post("/auth/register", values);
}
export async function loginUser(data: ILoginUser) {
  const response = await api.post("/auth/login", data);
  return response?.data;
}
