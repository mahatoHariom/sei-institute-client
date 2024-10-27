"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  FieldValues,
  DefaultValues,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { Form } from "@/components/ui/form";

interface FormWrapperProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  validationSchema: ZodSchema<T>;
  onSubmit: (data: T) => void;
  children: (
    methods: UseFormReturn<T> & { isValid: boolean }
  ) => React.ReactNode;
}

export const FormWrapper = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  onSubmit,
  children,
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children({ ...methods, isValid: methods.formState.isValid })}
        </form>
      </Form>
    </FormProvider>
  );
};
