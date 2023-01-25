import { Hexagon } from "../Hexagon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-primary h-[400px] w-full flex flex-col justify-center items-center gap-10 text-primary drop-shadow-lg ">
      <div className="w-full flex justify-center items-center gap-10  drop-shadow-lg ">
        <div className="flex mt-10">
          <Hexagon className="-ml-0 text-secondary" />
          <Hexagon className="-ml-44 -mt-10 text-primary rotate-45" />
          <Hexagon className="-ml-16 -mt-16 text-third" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-third">
          <div className="text-5xl font-bold">Danilo Schleu</div>
          <div className="text-2xl font-bold">Full Stack Developer</div>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center text-third">
        <a href="https://github.com/schleu">
          <FaGithub className="w-10 h-10" title="Github" />
        </a>
        <a href="https://www.linkedin.com/in/danilo-schleu/">
          <FaLinkedin className="w-10 h-10" title="LinkedIn" />
        </a>
      </div>
    </div>
  );
};
