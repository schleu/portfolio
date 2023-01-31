import { Button } from "../../../../components/Button";
import { Container } from "../../../../components/Container";
import { Service } from "./Service";

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
      {/* <div className="w-full flex justify-center bg-[#1A1A1A] py-[60px]"> */}

      <div className="flex gap-6">
        <Service
          icon={<>icone</>}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
        <Service
          icon={<>icone</>}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
        <Service
          icon={<>icone</>}
          title="Design de interfaces web"
          description="Interfaces para websites que funcionam em qualquer dispositivo, focado em seu público e forte apelo visual."
        />
      </div>
    </Container>
  );
};
