import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ReactComponent as CrownIcon } from "../../assets/crownSimple.svg";
import { Label } from "../Label";

interface iInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

export const Textarea = ({ label, placeholder, ...props }: iInputProps) => {
  const { register } = useFormContext();
  return (
    <Label label={label} required={props.required} id={props.name || ""}>
      <div className="flex items-center relative">
        <textarea
          {...props}
          {...register(props.name || "")}
          id={props.name || ""}
          className="w-full p-2 rounded bg-dark-800 border-dark-300 border"
          placeholder={placeholder || label}
        ></textarea>
      </div>
    </Label>
  );
};
