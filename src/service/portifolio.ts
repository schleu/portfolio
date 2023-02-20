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
      "https://d33wubrfki0l68.cloudfront.net/63d1914ea923880009a97a61/screenshot_2023-01-25-20-30-31-0000.png",
    title: "Portfólio",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
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
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
    link: "https://web-commerce-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/web-commerce",
    highlight: true,
  },
  {
    id: "d725abac-58c6-4109-8c92-0a8fcc5c842a",
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    title: "Pokedex",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu sed elementum consequat id pulvinar.",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/pokedex-react",
    highlight: false,
  },
];
