import { format } from "date-fns";
import { stack } from "../../../../constants/stack";
import LinkIcon from "../../../../assets/link.svg";
import { InView } from "react-intersection-observer";
import classNames from "classnames";

export interface ExpericenceProps {
  title: string;
  company: string;
  linkCompany?: string;
  startDate: Date;
  endDate?: Date;
  stack: stack[];
  locale: string;
}

export const Expericence = ({
  title,
  company,
  linkCompany = "#",
  startDate,
  endDate,
  locale,
  stack,
}: ExpericenceProps) => {
  return (
    <div className="p-4 shadow-lg rounded-lg bg-text-primary text-primary flex flex-col gap-2 w-full max-w-[800px]">
      <div className="">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-gray-500 flex items-end gap-4">
          {linkCompany ? (
            <a href={linkCompany} className="flex gap-2">
              {company}
              <img src={LinkIcon} className="w-3" />
            </a>
          ) : (
            company
          )}

          <span className="text-sm">({locale})</span>
        </div>
      </div>
      <div className="text-sm">
        {format(startDate, "MMM/yyyy")}
        {endDate ? ` - ${format(endDate, "MMM/yyyy")}` : ""}
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((e) => (
          <div
            className="rounded-full px-4 py-2 bg-secondary text-primary text-xs font-normal shadow-md cursor-default"
            key={e}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
