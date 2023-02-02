import { ReactNode } from "react";

interface iServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Service = ({ icon, title, description }: iServiceProps) => {
  return (
    <div className="w-full sm:max-w-[33%] rounded-lg bg-light-900 shadow-xl dark:bg-dark-500  px-6 py-12">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <div className="h-20 w-full flex justify-center items-center">
          {icon}
        </div>
        <h5 className="font-bold text-2xl leading-9">{title}</h5>
        <p className="font-normal text-base">{description}</p>
      </div>
    </div>
  );
};
