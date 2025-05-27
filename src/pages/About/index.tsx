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
import { experienciesMoked } from "../../data/experiencies";
import { Paragraph } from "../Home/components/About/Paragraph";
import { useTranslation } from "react-i18next";
import { softSkillsMoked } from "../../data/soft-skills";

enum ScrollIds {
  ABOUT_ME = "about-me",
  MY_JOURNEY = "my-journey",
  MY_CHARACTERISTICS = "my-characteristics",
  MY_HARD_SKILLS = "my-hard-skills",
  MY_SOFT_SKILLS = "my-soft-skills",
}

export const AboutPage = () => {
  const [stack, setStack] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState<string>(
    ScrollIds.ABOUT_ME
  );

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Juazeiro do Norte - Ceará";

  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const experiencies = experienciesMoked[
    language as keyof typeof experienciesMoked
  ].sort((a, b) =>  a.startDate.getTime() - b.startDate.getTime());

  const experienciesFiltered = experiencies.filter((exp) => {
    return exp.stack.some((s) => stack.includes(s));
  });


  const hardSkills = [...new Set(experiencies.map((exp) => exp.stack).flat())];

  const softSkills = softSkillsMoked[language as keyof typeof softSkillsMoked];

  useEffect(() => {
    if (stack.length === 0 && hardSkills.length > 0) {
      setStack(hardSkills);
    }
  }, [hardSkills]);

  function MenuItem({ id, text }: { id: string; text: string }) {
    const handleClick = () => {
      setCurrentSection(id);
      scroller.scrollTo(id, {
        offset: -150,
        smooth: true,
      });
    };

    return (
      <li
        className={classNames(
          " text-xs md:text-base cursor-pointer transition-all duration-1000 ease-in-out",
          currentSection === id ? "text-dark-50" : "text-dark-50/40"
        )}
      >
        <button className="w-full text-start" onClick={handleClick}>
          {text}
        </button>
      </li>
    );
  }

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

  useEffect(() => {
    const handleScroll = (e: any) => {
      const sections = document.querySelectorAll("h3");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (currentSection) {
        const id = currentSection.id;
        if (id !== "") {
          setCurrentSection(id);
        }
        const menuItem = document.querySelector(`a[href="#${id}"]`);
        if (menuItem) {
          menuItem.classList.add("text-primary");
        }
      }
      //   console.log("scroll", e);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const beforeBar =  classNames(
    "relative",
    "before:absolute before:rounded-full before:block",
    "before:content-[''] before:w-1 before:h-full",
    "before:bg-gradient-to-b from-primary/10 via-primary/100 to-primary/10"
  )

  return (
    <Container
      title={t("about.title")}
      section={t("about.section")}
      classes={{
        container: "relative",
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-16 w-full overflow-hidden max-w-[calc(100vw-240px)] text-dark-100  overflow-x-visible pr-4 animate-fadeIn">
        <div className="flex flex-col gap-10 ">
          {/* Quem sou eu? */}
          <div className={classNames(
            "flex flex-col gap-10 overflow-hidden relative",
            beforeBar
          )}>
            <div className="flex flex-col gap-6 pl-4 relative">
              <img
                src={ProfileImage}
                className={classNames(
                  "h-52 w-56 rounded-md object-cover z-10 hover:scale-110 transition-all duration-700 ease-in-out float-right absolute right-0"
                )}
                alt={t("about.photoAlt")}
              />
              <Paragraph>
                {t("about.description.p1", {
                  age,
                  city,
                })}
              </Paragraph>
              <Paragraph>{t("about.description.p2")}</Paragraph>
              <Paragraph>{t("about.description.p3")}</Paragraph>
              <Paragraph>{t("about.description.p4")}</Paragraph>
              <Paragraph>{t("about.description.p5")}</Paragraph>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className={classNames(
            "flex flex-col gap-6",
            beforeBar
          )}>
            <div className="flex flex-col gap-6 pl-4">
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
          </div>

          {/* Habilidades interpessoais */}
          <div className={classNames(
            "flex flex-col gap-10 overflow-hidden relative",
            beforeBar
          )}>
            <div className="flex flex-col gap-6 pl-4">
              <Title
                id={ScrollIds.MY_SOFT_SKILLS}
                text="Habilidades interpessoais"
                icon={<FiUsers />}
              />

              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.category}
                    className="flex flex-col gap-2 px-2 py-1"
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
          </div>

          {/* Minha jornada */}
          <div className={classNames(
            "flex flex-col gap-10 overflow-hidden relative",
            beforeBar
          )}>
            <div className="flex flex-col gap-6 pl-4">
              <Title
                id={ScrollIds.MY_JOURNEY}
                text="Minha jornada"
                icon={<GiPathDistance />}
              />

              {experienciesFiltered.map((exp) => (
                <Experience key={exp.company} {...exp} variant="full" />
              ))}
            </div>
          </div>
        </div>

        <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
          "Os limites só existem se você os deixar existir." - Son Goku
        </p>

        <div className="flex w-2/3 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto animate-pulse my-4" />
      </div>

      <div className="hidden sm:block fixed top-20 right-0 Z-0 h-full ">
        <div className="flex flex-col gap-6 border-l border-primary pt-4 pb-20">
          <ul className="list-none pl-6 flex flex-col gap-2">
            <MenuItem id={ScrollIds.ABOUT_ME} text="Quem sou eu?" />
            <MenuItem
              id={ScrollIds.MY_HARD_SKILLS}
              text="Habilidades técnicas"
            />
            <MenuItem
              id={ScrollIds.MY_SOFT_SKILLS}
              text="Habilidades interpessoais"
            />
            <MenuItem id={ScrollIds.MY_JOURNEY} text="Minha jornada" />
          </ul>
        </div>
      </div>
    </Container>
  );
};
