import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../../../api";
import { Container } from "../../../../components/Container";
import { FaProjectDiagram } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { BsFillEyeFill } from "react-icons/bs";

export const Portfolio = () => {
  const [translate] = useTranslation();

  return (
    <Container
      title={translate("project>title")}
      titleIcon={<FaProjectDiagram />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {portfolioData.map((e) => (
          <div
            key={e.title}
            className="flex flex-col justify-start items-center text-primary group h-[280px]"
          >
            <img
              src={e.image}
              className="rounded-lg z-10 shadow-lg group-hover:shadow transition-all duration-500"
            />
            <div
              className={classNames(
                "w-full flex justify-center items-center gap-2 rounded-lg shadow-xl bg-third",
                "transition-all duration-500",
                "h-14 sm:h-0 sm:-mt-5 group-hover:h-14 group-hover:mt-0"
              )}
            >
              <h3 className="font-bold drop-shadow-md ">{e.title}</h3>
              {e.git && (
                <a href={e.git} title="Git">
                  <DiGit className="h-8 w-8" />
                </a>
              )}
              {e.link && (
                <a href={e.link} title="Live">
                  <BsFillEyeFill className="h-8 w-8" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
