import { Link } from "react-scroll";
import { ReactComponent as FilePdfIcon } from "../../../../assets/filePdf.svg";
import { ReactComponent as ImagIcon } from "../../../../assets/hero.svg";
import { Button } from "../../../../components/Button";
import { ScrollIds } from "../../../../constant/ScrollIds";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-0 px-2.5 sm:px-0 py-6 max-w-screen-cut animate-fadeIn">
      <div className="flex flex-col gap-10 order-2 sm:order-1">
        <div className="flex flex-col gap-3 ">
          <div
            className={`uppercase font-light text-sm sm:text-xl leading-6 sm:leading-8 tracking-wider animate-[fadeInDown_2.5s_ease-in]`}
          >
            Danilo Schleu
          </div>
          <div className="font-extrabold text-2xl sm:text-5xl leading-6 sm:leading-[4rem] animate-[fadeInDown_2s_ease-in]">
            Full Stack Developer
          </div>
          <div className="font-normal text-sm leading-6 sm:text-xl sm:leading-8 animate-[fadeInDown_1.5s_ease-in]">
            A sua disposição para desenvolver soluções em tecnologia que atendam
            as necessidades de seu negócio
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 animate-[fadeInRight_1.5s_ease-in]">
          <Link to={ScrollIds.CONTACT} smooth={true}>
            <Button title="Vai para o formulário de contato">
              Entrar em contato
            </Button>
          </Link>
          <a href="/CV_Danilo_Schleu.pdf" target={"_blank"}>
            <Button filled={false} title="Abre currículo em outra aba">
              Currículo CV <FilePdfIcon />
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-start order-1 sm:order-2 text-primary animate-[fadeInLeft_1.5s_ease-in]">
        <ImagIcon className="w-full" />
      </div>
    </div>
  );
};
