import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  filled?: boolean;
  className?: string;
}
export const Button = ({
  children,
  className = "",
  filled = true,
  ...props
}: iButtonProps) => {
  const style = filled ? "bg-[#41B19B]" : "border border-[#41B19B]";

  return (
    <button
      {...props}
      className={classNames(
        "flex justify-center items-center py-2.5 px-4 gap-2.5 rounded",
        className,
        style
      )}
    >
      {children}
    </button>
  );
};
