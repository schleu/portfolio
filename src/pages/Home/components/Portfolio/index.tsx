import { Container } from "../../../../components/Container";

import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { portfolioData } from "../../../../data/portifolio";
import { ProjectCard } from "../../../../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../constant/AppRoutes";

export const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <Container
      title="Projetos em destaque"
      section="Portfólio"
      button={{
        title: "Ver mais",
        onClick: () => navigate(AppRoutes.PROJECTS),
        icon: <ArrowRightIcon className="-rotate-45" />,
      }}
      id={ScrollIds.PORTFOLIO}
      classes={{ container: "bg-dark-900 " }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {portfolioData.map(
          (item) =>
            item.highlight && (
              <ProjectCard
                key={item.title}
                id={item.id}
                image={item.smallImage}
                title={item.title}
                description={item.description}
                highlight={item.highlight}
                link={item.link}
              />
            )
        )}
      </div>
    </Container>
  );
};
