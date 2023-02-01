import { ReactComponent as ArrowRightIcon } from "../../assets/arrowRight.svg";
import { Button } from "../Button";

export const Footer = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-light-900 dark:bg-dark-900 /80 backdrop-blur-md border-t border-light-200  dark:border-light-200  dark:border-dark-200  500">
      <div className="w-full max-w-[1234px] flex justify-between items-center font-bold h-full px-2.5 sm:px-0">
        <div className="flex gap-2.5 items-center cursor-default">
          Copyright© 2022 - Danilo Schleu
        </div>
        <div className="hidden /*flex*/ items-center font-normal text-xs cursor-default">
          Designed by: Alexandre Shyjada
        </div>

        <Button className="bg-light-300  dark:bg-dark-300  w-10 h-10 p-0">
          <ArrowRightIcon className="-rotate-90" />
        </Button>
      </div>
    </div>
  );
};
