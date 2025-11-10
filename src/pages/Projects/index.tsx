import { useEffect } from "react";
import { scroller } from "react-scroll";
import { Container } from "../../components/Container";
import { ProjectCard } from "../../components/ProjectCard";
import { ScrollIds } from "../../constant/ScrollIds";
import { portfolioData } from "../../data/portifolio";
  
export const Projects = () => {
  useEffect(() => {
    scroller.scrollTo(ScrollIds.HOME, {
      smooth: true,
    });
  }, []);

  return (
    <Container
      title="Projetos"
      section="Portfólio"
      id={ScrollIds.PORTFOLIO}
      classes={{ container: "dark:bg-dark-900 " }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {portfolioData.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};
