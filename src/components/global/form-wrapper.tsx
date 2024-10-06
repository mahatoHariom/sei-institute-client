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
  children: (
    methods: UseFormReturn<T>,
    onSubmit: () => void
  ) => React.ReactNode;
}

export const FormWrapper = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  onSubmit,
  children,
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T> | DefaultValues<T>,
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      {children(methods, methods.handleSubmit(onSubmit))}
    </FormProvider>
  );
};
