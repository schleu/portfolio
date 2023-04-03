import { CgWebsite } from "react-icons/cg";
import { HiCommandLine } from "react-icons/hi2";
import { scroller } from "react-scroll";
import { Container } from "../../../../components/Container";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { Service } from "./Service";

export const Services = () => {
  const services = [
    {
      icon: <CgWebsite className="w-full h-full" />,
      title: "Websites",
      description:
        "Construção de sites responsivos, que funcionam em qualquer dispositivo.",
    },
    {
      icon: <HiCommandLine className="w-full h-full" />,
      title: "Sistemas",
      description: "Desenvolvimentoo de API's, DB",
    },
  ];

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
      classes={{ container: "bg-dark-800" }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {services.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </div>
    </Container>
  );
};
