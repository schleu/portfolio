import classNames from "classnames";
import { ReactNode } from "react";
import { Button } from "../Button";

interface iButton {
  title: string;
  onClick: () => void;
  icon?: ReactNode;
}

interface iClassnames {
  button?: string;
  container?: string;
}

interface ContainerProps {
  children?: ReactNode;
  title: string;
  section: string;
  button?: iButton;
  classes?: iClassnames;
}
export const Container = ({
  children,
  section,
  title,
  button,
  classes,
}: ContainerProps) => (
  <div
    className={classNames(
      "w-full flex justify-center py-8 sm:py-[60px]",
      classes?.container || "bg-[#1A1A1A]"
    )}
  >
    <div className="w-full max-w-screen-cut flex flex-col gap-12 px-2.5 sm:px-0">
      <div className="flex flex-col gap-6 sm:gap-12">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-xs leading-5 sm:text-base uppercase text-white/50">
              {section}
            </div>
            <div className="flex justify-between font-bold text-3xl leading-[3rem] sm:text-5xl sm:leading-[4rem]">
              {title}
            </div>
          </div>
          {button && (
            <Button
              onClick={button.onClick}
              className={classNames(
                "uppercase bg-white/10 hidden sm:flex",
                classes?.button
              )}
            >
              {button.title}
              {button.icon}
            </Button>
          )}
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  </div>
);
