import classNames from "classnames";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Paragraph } from "./Paragraph";
import { Experience as ExperienceType } from "../../../../data/experiencies";
import { Project } from "./Project";

interface iExperience extends ExperienceType{
  variant?: "full" | "shortly"
}

export const Experience = ({
  company,
  role,
  startDate,
  finalDate,
  description,
  projects,
  stack,
  variant = "shortly"
}: iExperience) => {
  const [showMore, setShowMore] = useState(true);

  const haveProjects = projects.length > 0;

  const isFull = variant === 'full'

  return (
    <Paragraph  isActive={showMore} id={`${company}-${role}`}>
      <h1
        className={`text-xl font-bold ${haveProjects ? "cursor-pointer" : ""}`}
        onClick={() => setShowMore((e) => !e)}
      >
        {role}
      </h1>
      <div className="flex items-center justify-between gap-10">
        <p className="text-xs capitalize">
          {format(startDate, "MMM yyyy", { locale: ptBr })} -{" "}
          {finalDate
            ? format(finalDate, "MMM yyyy", { locale: ptBr })
            : "Atual"}
        </p>

        <span className="text-dark-100 font-semibold text-base">@{company}</span>
      </div>

        {isFull && (
          <p className="py-4 text-dark-100 font-light text-xs">{description}</p>
        )}

      {projects.length && isFull ? (
        <div
          className={classNames(
            "overflow-hidden",
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

      <div className="flex flex-wrap items-center justify-start gap-2 pt-4">
        {stack.map((e) => (
          <div className="text-dark-200/70 text-xs capitalize">
            #{e}
          </div>
        ))}
      </div>

      <div className="flex w-2/3 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto animate-pulse my-4" />
    </Paragraph>
  );
};
