import { Container } from "../../../../components/Container";
import { Service } from "./Service";
import { DiReact } from "react-icons/di";
import { scroller } from "react-scroll";
import { ScrollIds } from "../../../../constant/ScrollIds";

export const Services = () => {
  return (
    <Container
      section="O que eu faço?"
      title="Serviços"
      button={{
        title: "Entrar em contato",
        onClick: () =>
          scroller.scrollTo(ScrollIds.CONTACT, {
            smooth: true,
          }),
      }}
      id={ScrollIds.SERVICES}
      classes={{ container: "bg-light-800 dark:bg-dark-800" }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Service
          icon={<DiReact className="w-full h-full" />}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
        <Service
          icon={<DiReact className="w-full h-full" />}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
        <Service
          icon={<DiReact className="w-full h-full" />}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
      </div>
    </Container>
  );
};
