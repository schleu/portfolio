import { ReactComponent as HexagonIcon } from "../../assets/hexagon.svg";
import { ReactNode } from "react";
import classNames from "classnames";

export const Hexagon = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("relative", className)}>
      <HexagonIcon className="w-32" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {children}
      </div>
    </div>
  );
};
