import { Container } from "../Container";

import { Hexagon } from "../Hexagon";

import { ReactNode } from "react";

interface SkillProps {
  text: string;
  image: string;
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
      <div className="w-full flex flex-wrap gap-2 justify-between px-4 sm:px-32">
        {items.map((item) => (
          <div
            key={item.text}
            className=" rounded-md bg-gray-100 px-1 mt-20"
            title={item.alt}
          >
            <Hexagon className="text-green-360 hover:text-green-350 transition-all duration-200 ease-in-out -mt-20">
              <img
                src={item.image}
                className="w-full h-14 hover:h-16 hover:rotate-180 duration-700"
              />
            </Hexagon>

            <div className="text-green-360 w-28 rounded-md cursor-default mx-auto text-center text-lg font-boldfont-techMono">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
