import { ReactNode, useEffect, useRef, useState } from "react";
import { Container } from "../../../../components/Container";
import { HardSkills } from "./data";
import { motion } from "framer-motion";
import { ScrollIds } from "../../../../constant/ScrollIds";
import classNames from "classnames";

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
      id={ScrollIds.SKILLS}
      classes={{ container: "bg-dark-900 " }}
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
          {HardSkills.map((item, i) => (
            <Card
              key={item.text}
              index={i}
              icon={item.icon}
              title={item.text}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
      <div className="w-full hidden sm:flex sm:flex-wrap gap-6">
        {HardSkills.map((item, index) => (
          <Card
            key={item.text}
            index={index}
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
  index: number;
}

const Card = ({ icon, description, title, index }: iCard) => (
  <div
    className={classNames(
      "w-[200px] flex flex-col justify-center items-start gap-8",
      "rounded px-3 py-5 shadow-xl bg-dark-500",
      "sm:hover:scale-110 transition-transform ease-in-out duration-300",
      `animate-[fadeInRight_${index}s_ease-in]`
    )}
  >
    <div className="w-8 sm:w-10 h-8 sm:h-10">{icon}</div>
    <div className="flex flex-col justify-start items-start gap-2 text-dark-100">
      <div className="font-bold text-base">{title + index}</div>
      <div className="font-normal text-xs leading-5 h-16">{description}</div>
    </div>
  </div>
);
