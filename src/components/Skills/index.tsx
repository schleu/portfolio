import { Container } from "../Container";

interface HabilitsProps {
  title: string;
  items: ItemProps[];
}

export const Skills = ({ items, title }: HabilitsProps) => {
  return (
    <Container title={title} tag="skills">
      <div className="w-full flex flex-col xs:flex-row xs:flex-wrap gap-2 justify-between bg-green-360  p-4 sm:py-8 sm:px-32 rounded-xl">
        {items.map((item) => (
          <Item key={item.text} text={item.text} image={item.image} />
        ))}
      </div>
    </Container>
  );
};

interface ItemProps {
  text: string;
  image: string;
}

const Item = ({ text, image }: ItemProps) => {
  return (
    <div className="text-white fill-white text-center text-lg font-bold hover:animate-bounce">
      <img src={image} className="w-full h-14" />
      {text}
    </div>
  );
};
