import classNames from "classnames";
import { differenceInYears, format } from "date-fns";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";
import ProfileImage from "../../../../assets/profile.webp";
import { Container } from "../../../../components/Container";
import { AppRoutes } from "../../../../constant/AppRoutes";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { experienciesMoked } from "../../../../data/experiencies";
import { Experience } from "./Experience";
import { Paragraph } from "./Paragraph";

export const About = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Juazeiro do Norte - Ceará";

  const experiencies = experienciesMoked[
    language as keyof typeof experienciesMoked
  ].sort((a, b) => {
    return a.startDate.getTime() - b.startDate.getTime();
  });

  const experienciesFiltered = experiencies

  const navigate = useNavigate();

  const isFull = false

  return (
    <Container
      title={t("about.title")}
      section={t("about.section")}
      id={ScrollIds.ABOUT}
      button={{
        title: t("common.seeMore"),
        onClick: () => navigate(AppRoutes.ABOUT),
        icon: <ArrowRightIcon className="-rotate-45" />,
      }}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 sm:items-start relative">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] relative z-0",
            "transition-all ease-in-out duration-700 animate-fadeInUp"
          )}
        >
          <div
            className={classNames(
              "border-b-8 border-r-8 absolute z-0",
              "border-primary bg-primary",
              "w-[212px] h-[278px] top-[3.2rem] left-[3.2rem]",
              "sm:w-[270px] sm:h-[368px] sm:top-8 sm:left-12",
              "transition-all ease-in-out duration-700  rounded-md"
            )}
          />
          <img
            src={ProfileImage}
            className={classNames(
              "h-full w-full object-cover z-10 absolute hover:scale-110 transition-all duration-700 ease-in-out rounded-lg border border-primary/50 "
            )}
            alt={t("about.photoAlt")}
          />
        </div>

        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-dark-100 h-screen overflow-y-scroll pr-4 animate-fadeIn  ">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-6" id="about_description">
              <Paragraph>
                {t("about.description.p1", {
                  age,
                  city,
                })}
              </Paragraph>

              <Paragraph>{t("about.description.p2")}</Paragraph>

              {isFull && (
                <>
                  <Paragraph>{t("about.description.p3")}</Paragraph>
                  <Paragraph>{t("about.description.p4")}</Paragraph>
                  <Paragraph>{t("about.description.p5")}</Paragraph>
                </>
              )}
            </div>

            <div className="flex justify-between gap-2 relative" id="about_experience">
              <i>{t("about.experience.title")}</i>
            </div>

            {experienciesFiltered.map((exp) => (
              <Experience key={exp.startDate.getTime()} {...exp} variant={isFull ? 'full' : 'shortly'} />
            ))}
          </div>

          <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
            {t("about.lastPhrase")}
          </p>
        </div>
      </div>
    </Container>
  );
};
