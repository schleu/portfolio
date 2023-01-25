import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../../../api";
import { Container } from "../../../../components/Container";

export const Portfolio = () => {
  const [translate] = useTranslation();

  return (
    <Container title={translate("project>title")}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {portfolioData.map((e) => (
          <a
            key={e.title}
            target={"_blank"}
            href={e.link}
            className="flex flex-col justify-center items-center text-green-350 group h-[300px]"
          >
            <img
              src={e.image}
              className="rounded-lg z-10 group-hover:border-2 border-white group-hover:shadow-xl"
            />
            <h3
              className={classNames(
                "w-5/6 text-center font-bold drop-shadow-md bg-white shadow-xl rounded-lg -mt-2 transition-all duration-500 overflow-hidden",
                "h-0",
                "group-hover:h-10"
              )}
            >
              {e.title}
            </h3>
          </a>
        ))}
      </div>
    </Container>
  );
};
