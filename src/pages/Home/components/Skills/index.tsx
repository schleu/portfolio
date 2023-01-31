import { ReactNode } from "react";
import { Container } from "../../../../components/Container";
import { HardSkills } from "./data";

export const Skills = () => {
  return (
    <Container
      section="Tecnologias"
      title="Minhas ferramentas"
      classes={{ container: "bg-[#121212]" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {HardSkills.map((item) => (
          <Card
            key={item.text}
            icon={item.icon}
            title={item.text}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

interface iCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const Card = ({ icon, description, title }: iCard) => (
  <div className="flex flex-col justify-center items-start gap-[3.25rem] rounded px-3 py-5 bg-[#262626]">
    <div>{icon}</div>
    <div className="flex flex-col text-[#F0F6FF]">
      <div className="font-bold text-base">{title}</div>
      <div className="font-normal text-xs leading-5">{description}</div>
    </div>
  </div>
);
