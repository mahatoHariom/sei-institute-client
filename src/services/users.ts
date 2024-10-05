import api from "@/lib/axios-instance";
import { ILoginUser, IRegisterUser } from "@/schema/users";

export default async function registerUser(data: IRegisterUser) {
  const response = await api.post("/auth/register", data);

  return response;
}

export async function loginUser(data: ILoginUser) {
  const response = await api.post("/auth/login", data);
  return response?.data;
}
