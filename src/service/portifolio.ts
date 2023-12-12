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
      "https://d33wubrfki0l68.cloudfront.net/654ce06705a0bd0008167264/screenshot_2023-11-09-13-37-06-0000.png",
    smallImage:
      "https://d33wubrfki0l68.cloudfront.net/654ce06705a0bd0008167264/screenshot_2023-11-09-13-37-06-0000.png",
    title: "Digital Pro",
    description: `DigitalPro Connect: Sua rota direta para o sucesso digital. Descubra como nossas soluções inovadoras de marketing digital podem transformar o seu negócio.`,
    link: "https://digital-pro.netlify.app/",
    git: "https://github.com/schleu/digital-pro",
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
  {
    id: "13515d47-cb7e-4bea-b7a4-bc23f0b1594b",
    image:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_1440/v1702353043/my-class-danilo-schleu.webp",
    smallImage:
      "https://res.cloudinary.com/dzo8dip4y/image/upload/c_scale,w_606/v1702353043/my-class-danilo-schleu.webp",

    title: "My Class",
    description:
      "O objetivo deste projeto é desenvolver um sistema de aula online que permita aos professores ministrar aulas de forma mais eficiente e interativa, e aos alunos aprender de forma mais eficaz.",
    link: "https://myclass-danilo-schleu.netlify.app/",
    git: "https://github.com/schleu/my-class",
    highlight: true,
  },
];
