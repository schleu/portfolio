import { Hexagon } from "../Hexagon";

export const Hero = () => {
  return (
    <div className="bg-primary h-[400px] w-full flex justify-center items-center gap-10 sm:gap-20 text-third drop-shadow-lg px-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-5xl font-bold">Danilo Schleu</div>
        <div className="text-2xl font-bold">Full Stack Developer</div>
      </div>
      <div className="flex mt-10">
        <Hexagon className="-ml-0 text-secondary" />
        <Hexagon className="-ml-44 -mt-10 text-primary rotate-45" />
        <Hexagon className="-ml-16 -mt-16 text-third" />
      </div>
    </div>
  );
};
