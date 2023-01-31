import classNames from "classnames";
import { Container } from "../../../../components/Container";

export const About = () => {
  return (
    <Container title="Um pouco da minha história" section="Sobre mim">
      <div className="flex justify-between items-center">
        <div
          className={classNames(
            "w-[310px] h-[392px] bg-[#333333] relative z-10",
            "before:content-[''] before:w-[270px] before:h-[368px] before:absolute before:border-b-8 before:border-r-8 before:border-[#41B19B] before:top-8 before:left-12 before:z-0"
          )}
        >
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_200_200/0/1624404116518?e=1680739200&v=beta&t=-uf-y5OphxnWFgsbfmkaGPon41ujHjCbgE0Cmgfo1XM"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-16 max-w-[800px] text-[#F0F6FF]">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>
            <p className="font-normal text-normal leading-7">
              Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado
              de Sistemas de Sistemas de Informação pela Universidade Federal da
              Bahia. Comecei minha carreira como designer aos 15 anos com
              trabalho voluntário em uma instituição religiosa. Lá conheci
              desenvolvedores Front-End que começaram a passar clientes para
              desenvolver Interfaces de Usuário.
            </p>
          </div>
          <h5 className="font-normal text-xl leading-8 opacity-50">
            "Never stop learning" - Rocketseat
          </h5>
        </div>
      </div>
    </Container>
  );
};
