import classNames from "classnames";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Paragraph } from "./Paragraph";
import { Experience as ExperienceType } from "../../../../data/experiencies";
import { Project } from "./Project";

export const Experience = ({
  company,
  role,
  startDate,
  finalDate,
  description,
  projects,
  stack,
}: ExperienceType) => {
  const [showMore, setShowMore] = useState(true);

  const haveProjects = projects.length > 0;

  return (
    <Paragraph indicator isActive={showMore}>
      <h1
        className={`text-xl ${haveProjects ? "cursor-pointer" : ""}`}
        onClick={() => setShowMore((e) => !e)}
      >
        {role}
      </h1>
      <div className="flex items-center gap-2">
        <span className="text-primary text-base">@{company}</span>
        <p className="text-xs capitalize">
          {format(startDate, "MMM yyyy", { locale: ptBr })} -{" "}
          {finalDate
            ? format(finalDate, "MMM yyyy", { locale: ptBr })
            : "Atual"}
        </p>
      </div>

      <p className="py-4">{description}</p>

      <div className="flex flex-wrap items-center justify-start gap-2 pb-4">
        {stack.map((e) => (
          <span className="text-xs capitalize border border-primary py-1 px-2 rounded-md">
            {e}
          </span>
        ))}
      </div>

      {projects.length ? (
        <div
          className={classNames(
            "overflow-hidden border-t border-primary/30",
            "flex flex-col gap-2",
            "transition-all duration-1000 ease-in-out h-fit w-full",
            showMore ? "max-h-[200px] p-2 " : "max-h-0 p-0 overflow-hidden "
          )}
        >
          {projects.map((e) => (
            <Project
              key={e.title}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </Paragraph>
  );
};
