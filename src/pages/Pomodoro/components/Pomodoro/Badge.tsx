import classNames from "classnames";
import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  active?: boolean;
}

export function Badge({ children, active = false, ...props }: Props) {
  return (
    <div
      className={classNames(
        "w-full text-center border rounded-sm cursor-pointer transition-all duration-500 ease-in-out",
        active
          ? " scale-110 font-bold border-dark-100 text-dark-100 shadow-md shadow-dark-100"
          : " border-dark-200 text-dark-200"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
