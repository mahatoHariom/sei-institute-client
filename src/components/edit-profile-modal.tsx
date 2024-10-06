"use client";
import { Input } from "@/components/ui/input";
import { EditProfileData, editProfileSchema } from "@/schema/profile";
import { FormWrapper } from "./global/form-wrapper";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/slices/modalSlice";

export const EditForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: EditProfileData) => {
    console.log("Form data:", data);
    // Handle form submission logic
    dispatch(closeModal()); // Close modal on successful submission
  };

  return (
    <FormWrapper
      defaultValues={{ name: "", username: "" }}
      validationSchema={editProfileSchema}
      onSubmit={onSubmit}
      formId="modal-form" // Set form ID for submission
    >
      {(methods) => (
        <div className="flex flex-col gap-3">
          <Input id="name" placeholder="Name" {...methods.register("name")} />
          <Input
            id="username"
            placeholder="Username"
            {...methods.register("username")}
          />
        </div>
      )}
    </FormWrapper>
  );
};
