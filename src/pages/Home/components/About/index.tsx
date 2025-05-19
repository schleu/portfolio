import classNames from "classnames";
import { differenceInYears } from "date-fns";
import ProfileImage from "../../../../assets/profile.webp";
import { Container } from "../../../../components/Container";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { Experience } from "./Experience";
import { Paragraph } from "./Paragraph";
import { useState } from "react";
import { experienciesMoked } from "./moked";
import { AboutFilter, FilterAboutType } from "./AboutFilter";

export const About = () => {
  const [filter, setFilter] = useState<FilterAboutType>("recente");
  const [stack, setStack] = useState<string[]>([]);

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Salvador - Bahia";

  const experiencies = experienciesMoked.sort((a, b) => {
    if (filter === "recente") return b.startDate.getTime() - a.startDate.getTime();
    if (filter === "antigo") return a.startDate.getTime() - b.startDate.getTime();
    return 0;
  });

  const experienciesFiltered = experiencies.filter((exp) => {
    return stack.every((s) => exp.stack.includes(s));
  });


  function handleFilterChange(filter: FilterAboutType, stack: string[]) {
    setFilter(filter);
    setStack(stack);
  }


  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      id={ScrollIds.ABOUT}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 sm:items-start">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] bg-dark-300 relative z-0",
            "transition-all ease-in-out duration-700 animate-fadeInUp"
          )}
        >
          <div
            className={classNames(
              "border-b-8 border-r-8 absolute z-0",
              "border-primary bg-primary",
              "w-[212px] h-[278px] top-[3.2rem] left-[3.2rem]",
              "sm:w-[270px] sm:h-[368px] sm:top-8 sm:left-12",
              "transition-all ease-in-out duration-700"
            )}
          />
          <img
            src={ProfileImage}
            className={classNames(
              "h-full w-full object-cover z-10 absolute hover:scale-110 transition-all duration-700 ease-in-out"
            )}
            alt="Foto do Danilo usando um casaco rosa escrito NASA, utilizando um notebook."
          />
        </div>

        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-dark-100 h-screen overflow-y-scroll pr-4 animate-fadeIn ">
          <div className="flex flex-col gap-10 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>

            <div className="flex flex-col gap-6">
              <Paragraph>
                Desenvolvedor Full Stack, tecnólogo em análise e desenvovimento
                de sistemas pela Cesumar.
              </Paragraph>

              <Paragraph>
                <span className="flex flex-wrap gap-2 ">
                  Solteiro, {age} anos, residente em {city}, amante de esportes,{" "}
                  sempre estou procurando praticar algo novo. No tempo livre,
                  adoro me aventurar na cozinha, além de ver alguma série ou
                  filme.
                </span>
              </Paragraph>
            </div>

            <div className="flex justify-between gap-2">
              <i>Aqui começa minha jornada profissional:</i>

              <AboutFilter onFilterChange={handleFilterChange} />
            </div>

            {experienciesFiltered.map((exp) => <Experience key={exp.company} {...exp} />)}
          </div>

          <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
            "Os limites só existem se você os deixar existir." - Son Goku
          </p>
        </div>
      </div>
    </Container>
  );
};


