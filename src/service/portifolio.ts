interface iPortfolio {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  git?: string;
  highlight?: boolean;
}

export const portfolioData: iPortfolio[] = [
  {
    id: "d0fe3dc6-15cc-4c06-9b80-ec823bb8ff86",
    image:
      "https://d33wubrfki0l68.cloudfront.net/642b0e7e307ebc0008a0a084/screenshot_2023-04-03-17-37-10-0000.png",
    title: "Portfólio",
    description:
      "Este é o meu portfólio pessoal, onde mostro meus trabalhos, habilidades e experiências como desenvolvedor web.",
    link: "https://portfolio-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/portfolio",
    highlight: true,
  },
  {
    id: "cc45a05f-0d63-4d16-9196-439f0907b8ef",
    image:
      "https://d33wubrfki0l68.cloudfront.net/63d1ee0210c5c50008d19565/screenshot_2023-01-26-03-06-09-0000.png",
    title: "Web Commerce",
    description:
      "O projeto web-commerce é um website de comércio eletrônico responsivo, desenvolvido com HTML, CSS e JavaScript. Ele inclui páginas para exibir produtos, carrinho de compras e checkout.",
    link: "https://web-commerce-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/web-commerce",
    highlight: false,
  },
  {
    id: "4c54d104-1d55-4b3a-8e77-d13106816802",
    image:
      "https://github.com/schleu/rick-and-morty/raw/main/public/preview.png",
    title: "Rick e Morty",
    description:
      `This project utilizes the Rick and Morty API to display information about the characters, episodes, and locations from the popular animated series "Rick and Morty".`,
    link: "https://rick-and-morty-three-pi.vercel.app/",
    git: "https://github.com/schleu/rick-and-morty",
    highlight: true,
  },
  {
    id: "d725abac-58c6-4109-8c92-0a8fcc5c842a",
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    title: "Pokedex",
    description:
      `O projeto pokedex-react é uma aplicação web em React que exibe informações sobre Pokémon, utilizando a PokéAPI.`,
    link: "https://pokedex-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/pokedex-react",
    highlight: false,
  },
];
