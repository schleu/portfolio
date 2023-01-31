import { Button } from "../../../../components/Button";
import { ReactComponent as FilePdfIcon } from "../../../../assets/filePdf.svg";
import { ReactComponent as ImagIcon } from "../../../../assets/hero.svg";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-0 px-2.5 sm:px-0 py-6 max-w-screen-cut">
      <div className="flex flex-col gap-10 order-2 sm:order-1">
        <div className="flex flex-col gap-3">
          <div className="uppercase font-light text-sm sm:text-xl leading-6 sm:leading-8 tracking-wider">
            Danilo Schleu
          </div>
          <div className="font-extrabold text-2xl sm:text-5xl leading-6 sm:leading-[4rem] ">
            Full Stack Developer
          </div>
          <div className="font-normal text-sm leading-6 sm:text-xl sm:leading-8 ">
            A sua disposição para desenvolver soluções em tecnologia que atendam
            as necessidades de seu negócio
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <Button>Entrar em contato</Button>
          <Button filled={false}>
            Currículo CV <FilePdfIcon />
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-start order-1 sm:order-2 text-[#41B19B]">
        <ImagIcon className="w-full" />
      </div>
    </div>
  );
};
