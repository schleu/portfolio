import { ReactNode } from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: ReactNode;
}
export const Button = ({ onClick, children, ...props }: ButtonProps) => (
  <button
    onClick={() => onClick()}
    className="shadow-md hover:shadow-lg py-2 px-10 rounded-xl bg-green-360/90 hover:bg-green-360 cursor-pointer text-white font-bold"
    {...props}
  >
    {children}
  </button>
);
