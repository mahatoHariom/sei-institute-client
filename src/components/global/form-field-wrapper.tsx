import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormFieldWrapperProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder: string;
  control: Control<T>;
}

export const FormFieldWrapper = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
}: FormFieldWrapperProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
