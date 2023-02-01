import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ReactComponent as CrownIcon } from "../../assets/crownSimple.svg";
import { Label } from "../Label";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

export const Input = ({ label, placeholder, ...props }: iInputProps) => {
  const { register } = useFormContext();
  return (
    <Label label={label} required={props.required}>
      <div className="flex items-center relative">
        <input
          type={"text"}
          {...register(props.name || "")}
          className="w-full p-2 pl-9 rounded bg-light-900 dark:bg-dark-800 border-light-300 dark:border-dark-300 border"
          placeholder={placeholder || label}
          {...props}
        />
        <CrownIcon className="absolute left-2" />
      </div>
    </Label>
  );
};
