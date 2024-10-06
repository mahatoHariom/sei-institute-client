"use client";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

interface ModalFooterProps {
  closeHandler: () => void;
  onSubmit: () => void;
}

export const ModalFooter = ({ closeHandler, onSubmit }: ModalFooterProps) => {
  return (
    <DialogFooter className="flex justify-end gap-2 mt-4">
      <Button type="button" onClick={closeHandler} variant={"destructive"}>
        Cancel
      </Button>
      {/* Submit Button */}
      <Button type="button" onClick={onSubmit}>
        Submit
      </Button>
    </DialogFooter>
  );
};
