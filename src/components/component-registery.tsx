"use client";
import { ModalContentKey } from "@/types/modal-keys";
import { EditForm } from "./edit-profile-modal";

const componentRegistry = {
  [ModalContentKey.EditProfileForm]: EditForm, // Correct mapping for the form
  // Add other modal content components here as needed
};

export const getModalContent = (key: ModalContentKey | null) => {
  if (key && componentRegistry[key]) {
    const Component = componentRegistry[key];
    return <Component />; // Properly render the content based on the key
  }
  return null; // Return null if no matching component
};
