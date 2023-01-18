import classNames from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
  title: string;
  children: ReactNode;
  tag?: string;
}
export const Container = ({ title, children, tag = "" }: ContainerProps) => {
  return (
    <div className={classNames("flex flex-col gap-4", tag)} id={tag}>
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">{title}</h1>
      {children}
    </div>
  );
};
