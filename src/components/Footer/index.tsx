import { Hexagon } from "../Hexagon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-green-360 h-[400px] w-full flex flex-col justify-center items-center gap-10 text-gray-210 drop-shadow-lg ">
      <div className="w-full flex justify-center items-center gap-10 text-gray-210 drop-shadow-lg ">
        <div className="flex mt-10">
          <Hexagon className="-ml-0  text-green-350" />
          <Hexagon className="-ml-44 -mt-10 text-green-360 rotate-45" />
          <Hexagon className="-ml-16 -mt-16  text-gray-210" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-5xl font-bold">Danilo Schleu</div>
          <div className="text-2xl font-bold">Full Stack Developer</div>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center">
        <FaGithub className="w-10 h-10" title="Github" />
        <FaLinkedin className="w-10 h-10" title="LinkedIn" />
      </div>
    </div>
  );
};
