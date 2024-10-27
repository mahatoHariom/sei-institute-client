"use client";

import { useDispatch } from "react-redux";
import { closeModal } from "@/store/slices/modalSlice";
import { FormWrapper } from "../global/form-wrapper";
import { ModalFooter } from "../global/modal/modal-footer";
import Cookies from "js-cookie";

import { FormFieldWrapper } from "../global/form-field-wrapper";

import { toast } from "sonner";
import { Messages } from "@/constants/messages";
import { useLoginUser } from "@/hooks/users/use-login-hooks";
import { LoginFormData, loginSchema } from "@/schema/users/login-schema";
import { handleError } from "@/helpers/handle-error";
import { setUser } from "@/store/slices/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { mutate: loginUser, isPending } = useLoginUser();

  const onSubmit = (data: LoginFormData) => {
    loginUser(data, {
      onSuccess: (data) => {
        Cookies.set("seiUser", JSON.stringify(data?.user));
        Cookies.set("accessToken", data.accessToken);
        Cookies.set("refreshToken", data.refreshToken);
        dispatch(setUser(data.user));
        toast.success(Messages.login.success);

        dispatch(closeModal());
      },
      onError: handleError,
    });
  };

  return (
    <FormWrapper
      defaultValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ control, isValid, handleSubmit }) => (
        <>
          <div className="flex flex-col gap-3 w-full">
            <FormFieldWrapper
              name="email"
              label="Email Address"
              placeholder="Email address"
              control={control}
            />
            <FormFieldWrapper
              name="password"
              label="Password"
              placeholder="Enter your password..."
              control={control}
            />

            <ModalFooter
              closeHandler={() => dispatch(closeModal())}
              onSubmit={handleSubmit(onSubmit)}
              isValid={isValid}
              loading={isPending}
            />
          </div>
        </>
      )}
    </FormWrapper>
  );
};
