"use client";
import React from "react";
// import Cookies from "js-cookie";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/global/form-wrapper";
import Cookies from "js-cookie";
import { FormFieldWrapper } from "@/components/global/form-field-wrapper";
import {
  CompleteProfileFormData,
  completeProfileSchema,
} from "@/schema/users/complete-profile-schema";
import { useCompleteProfile } from "@/hooks/users/use-complete-profile-hooks";
import { handleError } from "@/helpers/handle-error";
import { Messages } from "@/constants/messages";
import { redirect, useRouter } from "next/navigation";
import { routesPath } from "@/constants/routes-path";
import { revalidatePath } from "next/cache";

const CompleteProfile = () => {
  const { mutate: completeProfile, isPending } = useCompleteProfile();
  const router = useRouter();
  // const dispatch = useDispatch();
  // const { refetch: refetchProfile } = useGetProfile();

  const onSubmit = async (data: CompleteProfileFormData) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      // If the key is not 'profilePic', directly append it
      if (key !== "profilePic") {
        formData.append(key, value as string);
      }
    });

    // Check if profilePic is a File and append it if it exists
    if (data.profilePic instanceof File) {
      formData.append("profilePic", data.profilePic);
    }

    completeProfile(formData as CompleteProfileFormData, {
      onSuccess: async (data) => {
        debugger;
        Cookies.set("accessToken", data.accessToken);
        Cookies.set("user", JSON.stringify(data.updatedUser));
        Cookies.set("refreshToken", data.refreshToken);
        toast.success(Messages.profileComplete.success);
        // await router.replace(routesPath.home);
        router.refresh();
      },
      onError: handleError,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 shadow-md rounded-lg border">
        <h2 className="text-2xl font-bold text-center mb-2">
          Complete Profile
        </h2>
        <FormWrapper
          defaultValues={{
            phoneNumber: "",
            address: "",
            motherName: "",
            fatherName: "",
            parentContact: "",
            schoolCollegeName: "",
            profilePic: undefined,
          }}
          validationSchema={completeProfileSchema}
          onSubmit={onSubmit}
        >
          {({ control, isValid }) => (
            <div className="flex flex-col gap-4 w-full">
              <FormFieldWrapper
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter phone number"
                control={control}
              />
              <FormFieldWrapper
                name="address"
                label="Address"
                placeholder="Enter address"
                control={control}
              />
              <FormFieldWrapper
                name="motherName"
                label="Mother's Name"
                placeholder="Enter mother's name"
                control={control}
              />
              <FormFieldWrapper
                name="fatherName"
                label="Father's Name"
                placeholder="Enter father's name"
                control={control}
              />
              <FormFieldWrapper
                name="parentContact"
                label="Parent Contact"
                placeholder="Enter parent's contact number"
                control={control}
              />
              <FormFieldWrapper
                name="schoolCollegeName"
                label="School/College Name"
                placeholder="Enter school or college name"
                control={control}
              />
              <FormFieldWrapper
                name="profilePic"
                label="Profile Picture"
                type="file"
                accept="image/*"
                control={control}
              />
              <Button
                type="submit"
                disabled={!isValid || isPending}
                loading={isPending}
                className="mt-4"
              >
                Save Profile
              </Button>
            </div>
          )}
        </FormWrapper>
      </div>
    </div>
  );
};

export default CompleteProfile;
