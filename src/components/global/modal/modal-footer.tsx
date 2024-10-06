"use client";

import { Button } from "@/components/ui/button";

interface ModalFooterProps {
  closeHandler: () => void;
  formId: string;
}

export const ModalFooter = ({ closeHandler, formId }: ModalFooterProps) => {
  return (
    <div className="flex justify-end gap-2 mt-4">
      <Button type="button" onClick={closeHandler} variant={"destructive"}>
        Cancel
      </Button>
      {/* Submit Button */}
      <Button type="submit" form={formId}>
        Submit
      </Button>
    </div>
  );
};
