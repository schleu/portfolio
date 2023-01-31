import { Button } from "../../../../components/Button";
import { ReactComponent as FilePdfIcon } from "../../../../assets/filePdf.svg";
import { ReactComponent as ImagIcon } from "../../../../assets/hero.svg";

export const Hero = () => {
  return (
    <div className="w-full flex py-6 max-w-screen-cut">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="uppercase font-light text-xl leading-8 tracking-wider">
            Danilo Schleu
          </div>
          <div className="font-extrabold text-5xl leading-snug">
            Full Stack Developer
          </div>
          <div className="font-normal text-xl leading-8">
            A sua disposição para desenvolver soluções em tecnologia que atendam
            as necessidades de seu negócio
          </div>
        </div>
        <div className="flex gap-6  ">
          <Button>Entrar em contato</Button>
          <Button filled={false}>
            Currículo CV <FilePdfIcon />
          </Button>
        </div>
      </div>
      <div className="">
        <ImagIcon />
      </div>
    </div>
  );
};
