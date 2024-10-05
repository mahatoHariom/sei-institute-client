"use client";
import { openModal } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export const ExampleComponent = () => {
  const dispatch = useDispatch();

  const handleEditProfile = () => {
    dispatch(
      openModal({
        title: "Edit Profile",
        description:
          "Make changes to your profile here. Click save when you're done.",
        content: () => (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">Name</label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">Username</label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </>
        ),
        footer: () => <Button type="submit">Save changes</Button>,
      })
    );
  };

  return (
    <Button variant="outline" onClick={handleEditProfile}>
      Edit Profile
    </Button>
  );
};
