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
}: {
  company: string;
  role: string;
  startDate: Date;
  finalDate: Date;
  description: string;
  projects: {
    title: string;
    description: string;
  }[];
}) => {
  const [showMore, setShowMore] = useState(false);

  const haveProjects = projects.length > 0;

  return (
    <Paragraph indicator>
      <h1
        className={`text-xl ${haveProjects ? "cursor-pointer" : ""}`}
        onClick={() => setShowMore((e) => !e)}
      >
        {role} <span className="text-primary font-bold">@{company}</span>
      </h1>
      <p className="text-xs capitalize">
        {format(startDate, "MMM yyyy", { locale: ptBr })} -{" "}
        {format(finalDate, "MMM yyyy", { locale: ptBr })}
      </p>

      <p>{description}</p>

      {projects.length ? (
        <div
          className={classNames(
            "text-primary overflow-hidden bg-white/5 rounded-md",
            "transition-all duration-1000 ease-in-out h-fit w-full",
            showMore ? "max-h-[200px] p-2 " : "max-h-0 p-0 overflow-hidden "
          )}
        >
          {projects.map((e) => (
            <Project title={e.title} description={e.description} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </Paragraph>
  );
};
