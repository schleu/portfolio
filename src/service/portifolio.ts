interface iPortfolio {
  id: string;
  image: string;
  smallImage: string;
  title: string;
  description: string;
  link: string;
  git?: string;
  highlight?: boolean;
}

export const portfolioData: iPortfolio[] = [
  {
    id: "de952c67-6a41-4598-8aa0-732516c867c8",
    image:
      "https://d33wubrfki0l68.cloudfront.net/6547e79882d3680009e14a0c/screenshot_2023-11-05-19-06-24-0000.png",
    smallImage:
      "https://d33wubrfki0l68.cloudfront.net/6547e79882d3680009e14a0c/screenshot_2023-11-05-19-06-24-0000.png",
    title: "Agency SE",
    description: `Landing page de uma agência de publicidade.`,
    link: "https://agency-se.netlify.app/",
    git: "https://github.com/schleu/agency-se",
    highlight: true,
  },
  {
    id: "4c54d104-1d55-4b3a-8e77-d13106816802",
    image:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_1440/v1680628360/rick-and-morty_b13mi6.webp",
    smallImage:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_606/v1680628360/rick-and-morty_b13mi6.webp",
    title: "Rick e Morty",
    description: `This project utilizes the Rick and Morty API to display information about the characters, episodes, and locations from the popular animated series "Rick and Morty".`,
    link: "https://rick-and-morty-three-pi.vercel.app/",
    git: "https://github.com/schleu/rick-and-morty",
    highlight: true,
  },
  {
    id: "d0fe3dc6-15cc-4c06-9b80-ec823bb8ff86",
    image:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_1440/v1680628360/portfolio-danilo-schleu_uszxxg.webp",
    smallImage:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_606/v1680628360/portfolio-danilo-schleu_uszxxg.webp",
    title: "Portfólio",
    description:
      "Este é o meu portfólio pessoal, onde mostro meus trabalhos, habilidades e experiências como desenvolvedor web.",
    link: "https://portfolio-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/portfolio",
    highlight: true,
  },
];
