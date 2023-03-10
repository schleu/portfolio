import { experiences } from "../../../../services/api";
import { Container } from "../../../../components/Container";
import { Expericence } from "./Expericence";

export const ProfessionalExperience = () => {
  return (
    <Container title="Experiências" tag="ProfessionalExperience">
      <div className="flex flex-col w-full items-center gap-10 overflow-hidden transition-all duration-1000 ">
        {experiences.map((item) => (
          <Expericence key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};
