import classNames from "classnames";
import { differenceInYears } from "date-fns";
import { useEffect, useState } from "react";
import { FiCode, FiUsers } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { Link, scroller } from "react-scroll";
import ProfileImage from "../../assets/profile.webp";
import ProfileImage2 from "../../assets/profile2.jpg";
import { Container } from "../../components/Container";
import {
  AboutFilter,
  FilterAboutType,
} from "../Home/components/About/AboutFilter";
import { Experience } from "../Home/components/About/Experience";
import { experienciesMoked } from "../Home/components/About/moked";
import { Paragraph } from "../Home/components/About/Paragraph";
import { softSkillsMoked } from "../../data/soft_skills";
import { aboutMe } from "../../data/aboutMe";

enum ScrollIds {
  ABOUT_ME = "about-me",
  MY_JOURNEY = "my-journey",
  MY_CHARACTERISTICS = "my-characteristics",
  MY_HARD_SKILLS = "my-hard-skills",
  MY_SOFT_SKILLS = "my-soft-skills",
}

export const AboutPage = () => {
  const [filter, setFilter] = useState<FilterAboutType>("recente");
  const [stack, setStack] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState<string>(
    ScrollIds.ABOUT_ME
  );

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

  const hardSkills = [...new Set(experienciesFiltered.map((exp) => exp.stack).flat())];

  const softSkills = softSkillsMoked["pt"]

  useEffect(() => {
    if (stack.length === 0 && hardSkills.length > 0) {
      setStack(hardSkills);
    }
  }, [hardSkills]);

  function Title({
    id,
    text,
    icon,
  }: {
    id: string;
    text: string;
    icon: React.ReactNode;
  }) {
    return (
      <h3
        id={id}
        className="font-bold text-2xl leading-9 flex flex-row gap-2 items-center"
      >
        {icon} {text}
      </h3>
    );
  }

  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      classes={{
        container: "relative",
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-16 w-full overflow-hidden md:max-w-[calc(100vw-240px)] text-dark-100  overflow-x-visible pr-4 animate-fadeIn">
        <div className="flex flex-col gap-10 ">
          {/* Quem sou eu? */}
          <LeftSide>
            <div className="flex flex-col gap-10">
              <Title
                id={ScrollIds.ABOUT_ME}
                text="Quem é Danilo Schleu?"
                icon={<></>}
              />

              <div className="flex flex-col items-center gap-6">
                <Paragraph id={ScrollIds.ABOUT_ME}>
                  {aboutMe.paragraph1.replace("{age}", age.toString()).replace("{city}", city)}
                </Paragraph>
                

                <Paragraph id={""}>
                  {aboutMe.paragraph2}
                </Paragraph>

                <Paragraph id={""}>
                  {aboutMe.paragraph3}
                </Paragraph>

                <Paragraph id={""}>
                  {aboutMe.paragraph4}
                </Paragraph>

                <Paragraph id={""}>
                  {aboutMe.paragraph5}
                </Paragraph>
              </div>
            </div>
          </LeftSide>

          {/* Habilidades técnicas */}
          <LeftSide>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <Title
                id={ScrollIds.MY_HARD_SKILLS}
                text="Habilidades técnicas"
                icon={<FiCode />}
              />

              <div className="flex flex-wrap gap-4">
                {hardSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 border border-primary rounded-md px-2 py-1"
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </LeftSide>

          {/* Habilidades interpessoais */}
          <LeftSide>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <Title
                id={ScrollIds.MY_SOFT_SKILLS}
                text="Habilidades interpessoais"
                icon={<FiUsers />}
              />

              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.category}
                    className="flex flex-col gap-2 py-1"
                  >
                    <p className="text-lg font-bold">{skill.category}</p>
                    <div className="flex flex-col gap-2 ml-4">
                      {skill.skills.map((skill) => (
                        <div key={skill.title}>
                          <p className="text-base font-semibold">{skill.title}</p>
                          <p className="text-sm text-dark-100/50">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </LeftSide>

          {/* Minha jornada */}
          <LeftSide>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-2">
                <Title
                  id={ScrollIds.MY_JOURNEY}
                  text="Minha jornada"
                  icon={<GiPathDistance />}
                />

                <AboutFilter onFilterChange={handleFilterChange} />
              </div>

              {experienciesFiltered.map((exp) => (
                <Experience key={exp.company} {...exp} variant="full" />
              ))}
            </div>
          </LeftSide>
        </div>

        <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
          "Os limites só existem se você os deixar existir." - Son Goku
        </p>

        
      </div>
    </Container>
  );
};


function LeftSide({children}: {children: React.ReactNode}){

  return(
    <div className="w-full flex justify-center gap-6 h-full overflow-hidden">
      <div className="w-1 bg-gradient-to-b from-primary via-primary/30 to-transparent rounded-full" />
      {children}
    </div>
  )
}