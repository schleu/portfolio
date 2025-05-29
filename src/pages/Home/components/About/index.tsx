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
import { AppRoutes } from "../../../../constant/AppRoutes";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";
import { aboutMe } from "../../../../data/aboutMe";

export const About = () => {
  const [filter, setFilter] = useState<FilterAboutType>("recente");
  const [stack, setStack] = useState<string[]>([]);

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Juazeiro do Norte - Ceará";

  const experienciesFiltered = experienciesMoked.sort((a, b) => {
    if (filter === "recente")
      return b.startDate.getTime() - a.startDate.getTime();
    if (filter === "antigo")
      return a.startDate.getTime() - b.startDate.getTime();
    return 0;
  });

  function handleFilterChange(filter: FilterAboutType) {
    setFilter(filter);
  }

  const navigate = useNavigate();

  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      id={ScrollIds.ABOUT}
      button={{
        title: "ver mais",
        onClick: () => navigate(AppRoutes.ABOUT),
        icon: <ArrowRightIcon className="-rotate-45" />,
      }}
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
              {aboutMe.paragraph1.replace("{age}", age.toString()).replace("{city}", city)}
              </Paragraph>

              <Paragraph>
                {aboutMe.paragraph2}
              </Paragraph>

              <Link to={AppRoutes.ABOUT} className="text-primary text-sm -mt-4">
                Leia mais...
              </Link>
            </div>



            <div className="flex justify-between gap-2">
              <i className="text-dark-100/50 text-sm">Aqui começa minha jornada profissional:</i>

              <AboutFilter onFilterChange={handleFilterChange} />
            </div>

            {experienciesFiltered.map((exp) => (
              <Experience key={exp.company} {...exp} />
            ))}
          </div>

          <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
            "Os limites só existem se você os deixar existir." - Son Goku
          </p>
        </div>
      </div>
    </Container>
  );
};
