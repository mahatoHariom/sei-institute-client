"use client";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";

import { ModalContentKey } from "@/types/modal-keys";
import { Button } from "../ui/button";

export const LoginButton = () => {
  const dispatch = useDispatch();

  const handleEditProfile = () => {
    dispatch(
      openModal({
        title: "Login",
        description: "Login to your account",
        contentKey: ModalContentKey.LoginForm,
        isOpen: true,
      })
    );
  };

  return <Button onClick={handleEditProfile}>Login</Button>;
};
