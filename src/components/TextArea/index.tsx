import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ReactComponent as CrownIcon } from "../../assets/crownSimple.svg";
import { Label } from "../Label";

interface iInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}

export const Textarea = ({ label, placeholder, ...props }: iInputProps) => (
  <Label label={label} required={props.required}>
    <div className="flex items-center relative">
      <textarea
        {...props}
        className="w-full p-2  rounded bg-[#1A1A1A] border-[#333333] border "
        placeholder={placeholder || label}
      ></textarea>
    </div>
  </Label>
);
