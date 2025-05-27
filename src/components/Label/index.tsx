import { LabelHTMLAttributes, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface iInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  children: ReactNode;
}

export const Label = ({
  id,
  label,
  placeholder,
  required,
  children,
  ...props
}: iInputProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full text-dark-100 flex flex-col gap-1">
      <div className="flex justify-between items-center ">
        <label htmlFor={id} className="text-base" {...props}>
          {label}
        </label>
        <span className="text-sm leading-6 text-danger">
          {required && t("required")}
        </span>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
