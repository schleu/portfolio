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
  const style = filled
    ? "bg-primary hover:bg-primary/80"
    : "border border-primary hover:bg-primary/10";

  return (
    <button
      {...props}
      className={classNames(
        "flex justify-center items-center p-2 sm:py-2.5 sm:px-4 gap-2.5 rounded",
        "text-sm sm:text-base leading-6 text-dark-100 hover:text-dark-200",
        "transition-all duration-300 ease-in-out",
        className,
        style
      )}
    >
      {children}
    </button>
  );
};
