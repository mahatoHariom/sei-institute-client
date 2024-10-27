/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios-instance";
import { CompleteProfileFormData } from "@/schema/users/complete-profile-schema";
import { LoginFormData } from "@/schema/users/login-schema";
import { SignUpFormData } from "@/schema/users/signup-schema";
import { User } from "@/types";

import { AxiosResponse } from "axios";

export default async function registerUser(
  values: SignUpFormData
): Promise<AxiosResponse<User>> {
  return await api.post("/auth/register", values);
}
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export async function loginUser(data: LoginFormData): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
}

export async function completeProfile(data: CompleteProfileFormData) {
  const response = await api.post("/user/complete-profile", data);
  return response.data;
}

export async function getProfile(): Promise<User> {
  const response = await api.get<User>("/auth/profile");
  return response.data;
}
