import { useEffect } from "react";
import { DiGithub } from "react-icons/di";
import { TbExternalLink } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { scroller } from "react-scroll";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { ScrollIds } from "../../constant/ScrollIds";
import { portfolioData } from "../../service/portifolio";

export const Projects = () => {
  let { projectId } = useParams();
  const project = portfolioData.find((project) => project.id === projectId);
  useEffect(() => {
    scroller.scrollTo(ScrollIds.HOME, {
      smooth: true,
    });
  }, []);

  return (
    <Container title={project?.title || ""} section="projeto">
      <div className="flex flex-col gap-5">
        <div className="w-full flex justify-center ">
          <img
            src={project?.image}
            alt=""
            className="border border-dark-100 rounded-lg"
          />
        </div>
        <h2 className="text-3xl  font-bold">{project?.title}</h2>
        <p className="text-xl">{project?.description}</p>

        <div className="flex items-center gap-10">
          <a href={project?.git} target={"_blank"}>
            <Button filled={false} className="text-lg">
              <DiGithub className="h-7 w-7" />
              Github
            </Button>
          </a>
          <a href={project?.link} target={"_blank"}>
            <Button filled={false} className="text-lg">
              <TbExternalLink className="w-7 h-7" />
              Live
            </Button>
          </a>
        </div>
      </div>
    </Container>
  );
};
