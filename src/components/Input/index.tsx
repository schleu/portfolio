import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "../Label";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  Icon?: any;
}

export const Input = ({ label, placeholder, Icon, ...props }: iInputProps) => {
  const { register } = useFormContext();
  return (
    <Label label={label} required={props.required} id={props.name || ""}>
      <div className="flex items-center relative">
        <input
          type={"text"}
          {...register(props.name || "")}
          id={props.name || ""}
          className="w-full p-2 pl-9 rounded bg-dark-800 border-dark-300 border"
          placeholder={placeholder || label}
          {...props}
        />
        {Icon && <Icon className="absolute left-2" />}
      </div>
    </Label>
  );
};
