"use client";
import { ModalContentKey } from "@/types/modal-keys";
import { EditForm } from "./edit-profile-modal";
import { SignUpForm } from "./auth/signup-form";

const componentRegistry = {
  [ModalContentKey.EditProfileForm]: EditForm,
  [ModalContentKey.SignUpForm]: SignUpForm,
};

export const getModalContent = (key: ModalContentKey | null) => {
  if (key && componentRegistry[key]) {
    const Component = componentRegistry[key];
    return <Component />;
  }
  return null;
};
