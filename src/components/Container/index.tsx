import classNames from "classnames";
import { ReactNode, useRef } from "react";
import { useScroll, useScrolling, useWindowScroll } from "react-use";
import { InView } from "react-intersection-observer";

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
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={classNames(
            "flex flex-col gap-4 relative",
            tag,
            inView ? "motion-safe:animate-fadeIn" : ""
          )}
          id={tag}
        >
          <h1 className="text-4xl font-bold text-primary drop-shadow-lg font-techMono flex gap-2 items-center">
            {title}
            {titleIcon}
          </h1>
          {children}
        </div>
      )}
    </InView>
  );
};
