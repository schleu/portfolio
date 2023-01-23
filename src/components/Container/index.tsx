import classNames from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
  title: string;
  titleIcon?: ReactNode;
  children: ReactNode;
  tag?: string;
}
export const Container = ({
  title,
  titleIcon,
  children,
  tag = "",
}: ContainerProps) => {
  return (
    <div className={classNames("flex flex-col gap-4", tag)} id={tag}>
      <h1 className="text-4xl font-bold text-white drop-shadow-lg font-techMono flex gap-2 items-center">
        {title}
        {titleIcon}
      </h1>
      {children}
    </div>
  );
};
