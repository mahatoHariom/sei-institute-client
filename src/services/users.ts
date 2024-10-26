/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios-instance";
import { ILoginUser, IRegisterUser } from "@/schema/users";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";

export default async function registerUser(
  data: IRegisterUser
): Promise<AxiosResponse<User, User>> {
  const response = await api.post("/auth/register", data);

  return response;
}

export async function loginUser(data: ILoginUser) {
  const response = await api.post("/auth/login", data);
  return response?.data;
}
