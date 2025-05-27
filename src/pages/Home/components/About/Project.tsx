import { Project as ProjectType } from "../../../../data/experiencies";

export const Project = ({ title, description }: ProjectType) => (
  <div className="flex flex-col">
    <h3 className="font-semibold text-zinc-50 text-base">{title}</h3>
    <p className="flex-1 text-zinc-400 text-sm ml-4">{description}</p>
  </div>
);
