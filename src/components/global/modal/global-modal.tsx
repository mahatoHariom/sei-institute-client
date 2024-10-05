"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { closeModal } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";

const GlobalModal = () => {
  const dispatch = useDispatch();
  const { isOpen, title, description, content, footer } = useSelector(
    (state: RootState) => state.modal
  );


  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeModal())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Render content */}
          {content && typeof content === "function" ? content() : content}
        </div>
        <DialogFooter>
          {/* Render footer content if available */}
          {footer && (typeof footer === "function" ? footer() : footer)}
          {/* Always display the Close button */}
          <Button type="button" onClick={() => dispatch(closeModal())}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalModal;
