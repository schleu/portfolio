import { LabelHTMLAttributes, ReactNode } from "react";

interface iInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  placeholder?: string;
  required?: boolean;
  children: ReactNode;
}

export const Label = ({
  label,
  placeholder,
  required,
  children,
  ...props
}: iInputProps) => (
  <div className="w-full text-white flex flex-col gap-1">
    <div className="flex justify-between items-center ">
      <label htmlFor="" className="text-base" {...props}>
        {label}
      </label>
      <span className="text-sm leading-6 text-[#F12C4C]">
        {required && "Obrigatório"}
      </span>
    </div>
    <div className="w-full">{children}</div>
  </div>
);
