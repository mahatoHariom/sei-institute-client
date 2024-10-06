"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeModal } from "@/store/slices/modalSlice";
import { getModalContent } from "@/components/component-registery";
import { ModalFooter } from "./modal-footer";

export const GlobalModal = () => {
  const dispatch = useDispatch();
  const { isOpen, title, description, contentKey } = useSelector(
    (state: RootState) => state.modal
  );

  const hideModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null; // Only render modal if open

  return (
    <Dialog open={isOpen} onOpenChange={hideModal}>
      <DialogContent>
        {/* Modal header with title and description */}
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {/* Dynamically rendered modal content */}

        <div className="py-4">
          {getModalContent(contentKey)} {/* Render content dynamically */}
        </div>

        {/* Render the modal footer */}
        <ModalFooter closeHandler={hideModal} formId="modal-form" />
      </DialogContent>
    </Dialog>
  );
};
