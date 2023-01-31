import { InputHTMLAttributes } from "react";
import { ReactComponent as CrownIcon } from "../../assets/crownSimple.svg";
import { Label } from "../Label";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

export const Input = ({ label, placeholder, ...props }: iInputProps) => (
  <Label label={label} required={props.required}>
    <div className="flex items-center relative">
      <input
        type={"text"}
        className="w-full p-2 pl-9 rounded bg-[#1A1A1A] border-[#333333] border "
        placeholder={placeholder || label}
        {...props}
      />
      <CrownIcon className="absolute left-2" />
    </div>
  </Label>
);
