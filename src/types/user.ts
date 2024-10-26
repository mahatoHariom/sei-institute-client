export enum Role {
  user = "user",
  admin = "admin",
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  role: Role;
}
