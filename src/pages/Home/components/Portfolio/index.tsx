import { Link } from "react-router-dom";
import { Container } from "../../../../components/Container";

import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";
import { ProjectCard } from "./ProjectCard";

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
      classes={{ container: "bg-[#121212]" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {portfolioData.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};

interface iPortfolio {
  image: string;
  title: string;
  description: string;
  link: string;
  git?: string;
}

export const portfolioData: iPortfolio[] = [
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    title: "Pokedex",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/pokedex-react",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63d1914ea923880009a97a61/screenshot_2023-01-25-20-30-31-0000.png",
    title: "Portfólio",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
    link: "https://portfolio-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/portfolio",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63d1ee0210c5c50008d19565/screenshot_2023-01-26-03-06-09-0000.png",
    title: "Web Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
    link: "https://web-commerce-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/web-commerce",
  },
];
