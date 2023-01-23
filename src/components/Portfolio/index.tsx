import { Container } from "../Container";

const data = [
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    title: "Pokedex",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    title: "Pokedex",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    title: "Pokedex",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    title: "Pokedex",
  },
];

export const Portfolio = () => {
  return (
    <Container title="Projetinhos" tag="projects">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {data.map((e) => (
          <a
            target={"_blank"}
            href={e.link}
            className="flex flex-col justify-center items-center gap-1 rounded-lg bg-green-350/40 shadow-xl p-4 "
          >
            <img src={e.image} className="rounded-lg" />
            <h3 className="w-full text-center text-white drop-shadow-md ">
              {e.title}
            </h3>
          </a>
        ))}
      </div>
    </Container>
  );
};
