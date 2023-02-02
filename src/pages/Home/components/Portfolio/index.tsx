import { Link } from "react-router-dom";
import { Container } from "../../../../components/Container";

import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";
import { ProjectCard } from "./ProjectCard";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { portfolioData } from "../../../../service/portifolio";

export const Portfolio = () => {
  return (
    <Container
      title="Projetos em destaque"
      section="Portfólio"
      button={{
        title: "Ver mais no Behance",
        onClick: () => {},
        icon: <ArrowRightIcon className="-rotate-45" />,
      }}
      id={ScrollIds.PORTFOLIO}
      classes={{ container: "bg-light-900 dark:bg-dark-900 " }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {portfolioData.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};
