import { Container } from "../../../../components/Container";

import { Hexagon } from "../../../../components/Hexagon";

import { ReactNode } from "react";

interface SkillProps {
  text: string;
  icon: ReactNode;
  alt?: string;
}

interface SkillsPageProps {
  title: string;
  titleIcon?: ReactNode;
  items: SkillProps[];
}

export const Skills = ({ items, title, titleIcon }: SkillsPageProps) => {
  return (
    <Container title={title} titleIcon={titleIcon} tag="skills">
      <div className="w-full flex flex-wrap gap-x-4 gap-y-8 justify-center px-4 sm:px-32">
        {items.map((item) => {
          const { icon } = item;
          return (
            <div
              key={item.text}
              className=" rounded-md bg-gray-100 px-1 mt-12 pb-2 shadow-2xl"
              title={item.alt}
            >
              <Hexagon className="text-primary hover:text-primary transition-all duration-200 ease-in-out -mt-20">
                {icon}
              </Hexagon>

              <div className="text-primary w-28 rounded-md cursor-default mx-auto text-center text-lg font-boldfont-techMono">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
