import { ReactNode, useEffect, useRef, useState } from "react";
import { Container } from "../../../../components/Container";
import { HardSkills } from "./data";
import { motion } from "framer-motion";

export const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current !== null) {
      const { offsetWidth, scrollWidth } = carouselRef.current;
      setCarouselWidth(scrollWidth - offsetWidth);
    }
  }, [carouselRef.current]);

  return (
    <Container
      section="Tecnologias"
      title="Minhas ferramentas"
      classes={{ container: "bg-light-900 dark:bg-dark-900 " }}
    >
      <div ref={carouselRef} className="w-full block sm:hidden overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -carouselWidth,
          }}
          className="w-full flex  gap-6"
        >
          {HardSkills.map((item) => (
            <Card
              key={item.text}
              icon={item.icon}
              title={item.text}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
      <div className="w-full hidden sm:grid sm:grid-cols-2 md:grid-cols-6 gap-6">
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
  <div className="min-w-[10rem] flex flex-col justify-center items-start gap-[3.25rem] rounded px-3 py-5 bg-light-900 shadow-xl  dark:bg-dark-500 ">
    <div className="w-8 sm:w-10 h-8 sm:h-10">{icon}</div>
    <div className="flex flex-col text-light-100  dark:text-dark-100 ">
      <div className="font-bold text-base">{title}</div>
      <div className="font-normal text-xs leading-5">{description}</div>
    </div>
  </div>
);
