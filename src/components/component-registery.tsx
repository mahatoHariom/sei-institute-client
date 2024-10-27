"use client";
import { ModalContentKey } from "@/types/modal-keys";

import { SignUpForm } from "./auth/signup-form";
// import { LoginForm } from "./auth/login-form";

const componentRegistry = {
  [ModalContentKey.SignUpForm]: SignUpForm,
  // [ModalContentKey.LoginForm]: LoginForm,
};

export const getModalContent = (key: ModalContentKey | null) => {
  if (key && componentRegistry[key]) {
    const Component = componentRegistry[key];
    return <Component />;
  }
  return null;
};
