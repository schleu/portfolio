import { Container } from "../../../../components/Container";
import { Service } from "./Service";
import { DiReact } from "react-icons/di";

export const Services = () => {
  return (
    <Container
      section="O que eu faço?"
      title="Serviços"
      button={{
        title: "Entrar em contato",
        onClick: () => {},
      }}
      classes={{ container: "bg-[#1A1A1A]" }}
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
