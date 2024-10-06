"use client";
import {
  FormProvider,
  useForm,
  UseFormReturn,
  FieldValues,
  DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

interface FormWrapperProps<T extends FieldValues> {
  defaultValues: T;
  validationSchema?: ZodSchema<T>;
  onSubmit: (data: T) => void;
  children: (methods: UseFormReturn<T>) => React.ReactNode;
  formId?: string;
}

export const FormWrapper = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  onSubmit,
  children,
  formId = "form-wrapper",
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T> | DefaultValues<T>,
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form id={formId} onSubmit={methods.handleSubmit(onSubmit)}>
        {children(methods)}
      </form>
    </FormProvider>
  );
};
