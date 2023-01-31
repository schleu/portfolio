import classNames from "classnames";
import { Container } from "../../../../components/Container";

export const About = () => {
  return (
    <Container title="Um pouco da minha história" section="Sobre mim">
      <div className="flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-center">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] bg-[#333333] relative",
            "before:content-[''] before:absolute before:border-b-8 before:border-r-8 before:border-[#41B19B]",
            "before:w-[212px] before:h-[278px] before:top-[3.2rem] before:left-[3.2rem]",
            "sm:before:w-[270px] sm:before:h-[368px] sm:before:top-8 sm:before:left-12"
          )}
        >
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_200_200/0/1624404116518?e=1680739200&v=beta&t=-uf-y5OphxnWFgsbfmkaGPon41ujHjCbgE0Cmgfo1XM"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-[#F0F6FF]">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>
            <p className="font-normal text-sm leading-6 sm:text-normal sm:leading-7">
              Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado
              de Sistemas de Sistemas de Informação pela Universidade Federal da
              Bahia. Comecei minha carreira como designer aos 15 anos com
              trabalho voluntário em uma instituição religiosa. Lá conheci
              desenvolvedores Front-End que começaram a passar clientes para
              desenvolver Interfaces de Usuário.
            </p>
          </div>
          <h5 className="font-normal text-base sm:text-xl leading-8 text-white/50">
            "Never stop learning" - Rocketseat
          </h5>
        </div>
      </div>
    </Container>
  );
};
