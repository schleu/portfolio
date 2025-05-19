import classNames from "classnames";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Project } from "./Project";
import { Paragraph } from "./Paragraph";
import { useState } from "react";

export const Experience = ({
  company,
  role,
  startDate,
  finalDate,
  description,
  projects,
  stack,
}: {
  company: string;
  role: string;
  startDate: Date;
  finalDate?: Date;
  description: string;
  stack: string[];
  projects: {
    title: string;
    description: string;
  }[];
}) => {
  const [showMore, setShowMore] = useState(true);

  const haveProjects = projects.length > 0;

  return (
    <Paragraph indicator isActive={showMore}>
      <h1
        className={`text-xl ${haveProjects ? "cursor-pointer" : ""}`}
        onClick={() => setShowMore((e) => !e)}
      >
        {role} <span className="text-primary font-bold">@{company}</span>
      </h1>
      <p className="text-xs capitalize">
        {format(startDate, "MMM yyyy", { locale: ptBr })} -{" "}
        {finalDate ? format(finalDate, "MMM yyyy", { locale: ptBr }) : "Atual"}
      </p>

      <p className="py-4">{description}</p>

      <div className="flex flex-wrap items-center justify-start gap-2 pb-4"> 
        {stack.map((e) => (
          <span className="text-xs capitalize border border-primary py-1 px-2 rounded-md">{e}</span>
        ))}
      </div>

      {projects.length ? (
        <div
          className={classNames(
            "text-primary overflow-hidden bg-white/5 rounded-md",
            "transition-all duration-1000 ease-in-out h-fit w-full",
            showMore ? "max-h-[200px] p-2 " : "max-h-0 p-0 overflow-hidden "
          )}
        >
          {projects.map((e) => (
            <Project key={e.title} title={e.title} description={e.description} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </Paragraph>
  );
};
