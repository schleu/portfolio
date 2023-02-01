import classNames from "classnames";
import { Container } from "../../../../components/Container";

export const About = () => {
  return (
    <Container title="Um pouco da minha história" section="Sobre mim">
      <div className="flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-center">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] bg-light-300  dark:bg-dark-300  relative",
            "before:content-[''] before:absolute before:border-b-8 before:border-r-8 before:border-primary",
            "before:w-[212px] before:h-[278px] before:top-[3.2rem] before:left-[3.2rem]",
            "sm:before:w-[270px] sm:before:h-[368px] sm:before:top-8 sm:before:left-12"
          )}
        >
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHFrY3_LuLJBg/profile-displayphoto-shrink_200_200/0/1624404116518?e=1680739200&v=beta&t=-uf-y5OphxnWFgsbfmkaGPon41ujHjCbgE0Cmgfo1XM"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-light-100  dark:text-dark-100 ">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>
            <p className="font-normal text-sm leading-6 sm:text-normal sm:leading-7">
              Desenvolvedor Full Stack e Tecnólogo em analise e desenvovimento
              de sistemas pela Cesumar. Comecei minha carreira como
              desenvolvedor Cobol, e após atuando com ColdFusion. Me arrisquei
              como front-end após 5 anos sendo back-end e hoje me sinto feliz
              sendo apto atuar em ambas posições.
            </p>
          </div>
          <h5 className="font-normal text-base sm:text-xl leading-8 text-dark-900 dark:text-dark-100/50">
            "Never stop learning" - Rocketseat
          </h5>
        </div>
      </div>
    </Container>
  );
};
