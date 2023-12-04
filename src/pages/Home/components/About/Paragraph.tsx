import { ReactNode } from "react";

export const Paragraph = ({
  children,
  indicator = false,
}: {
  children: ReactNode;
  indicator?: boolean;
}) => (
  <div
    className={`max-w-[600px] font-normal text-sm leading-6 sm:text-normal sm:leading-7 relative ${
      indicator ? "pl-10" : ""
    }`}
  >
    {indicator && (
      <div
        className=" rounded-full border-2 h-5 w-5 absolute left-0 translate-x-1/2 bg-dark-800 border-primary top-1 
          after:w-3 after:h-3 after:rounded-full after:bg-primary after:content-[''] after:animate-pulse
          after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"
      />
    )}
    {children}
  </div>
);
