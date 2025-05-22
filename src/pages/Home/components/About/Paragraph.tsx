import { ReactNode } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

export const Paragraph = ({
  children,
  indicator = false,
  isActive = false,
  id = "",
}: {
  children: ReactNode;
  indicator?: boolean;
  isActive?: boolean;
  id?: string;
}) => (
  <div
    id={id}
    className={`max-w-[600px] font-normal text-sm leading-6 sm:text-normal sm:leading-7 relative ${
      indicator ? "pl-10" : ""
    }`}
  >
    {indicator && (
      <div
        className="absolute left-0 translate-x-1/2 top-1 text-primary  
        flex items-center justify-center"
      >
        <FaChevronCircleRight
          className={`h-5 w-5 transition-all duration-300 ease-in-out ${
            isActive ? "rotate-90" : ""
          }`}
        />
      </div>
    )}
    {children}
  </div>
);
