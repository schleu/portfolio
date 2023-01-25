import { FaHandSparkles } from "react-icons/fa";
import { GoBook, GoGraph, GoMegaphone } from "react-icons/go";
import { RiPlantLine } from "react-icons/ri";

import {
  DiCss3,
  DiDatabase,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiLess,
  DiMysql,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiSass,
  DiSqllite,
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

import { ReactComponent as CobolIcon } from "./assets/cobolIcon.svg";
import { ReactComponent as ColdfusionIcon } from "./assets/coldfusionIcon.svg";
import { ExpericenceProps } from "./pages/Experiences/components/ProfessionalExperience/Expericence";

export const SoftSkills = [
  {
    icon: <GoBook className="w-full h-16 duration-700" />,
    text: "Vontade de aprender",
    alt: "Conseguir se adaptar a mudanças e desafios",
  },
  {
    icon: <RiPlantLine className="w-full h-16 duration-700" />,
    text: "Resiliência",
    alt: "Conseguir se adaptar a mudanças e desafios",
  },
  {
    icon: <GoMegaphone className="w-full h-16 duration-700" />,
    text: "Comunicação",
    alt: "Conseguir se adaptar a mudanças e desafios",
  },
  {
    icon: <GoGraph className="w-full h-16 duration-700" />,
    text: "Proatividade",
    alt: "Habilidade para conseguir reagir a imprevistos, propondo soluções.",
  },
  {
    icon: <FaHandSparkles className="w-full h-16 duration-700" />,
    text: "Autonomia",
    alt: "Conseguir tomar decisões e realizar o trabalho sem precisar sempre de aval da liderança.",
  },
];

export const HardSkills = [
  {
    icon: <DiReact className="w-full h-16 duration-700" />,
    text: "React",
  },
  {
    icon: <DiNodejsSmall className="w-full h-16 duration-700" />,
    text: "NodeJs",
  },
  {
    icon: <SiTypescript className="w-full h-14 duration-700" />,
    text: "TypeScript",
  },
  {
    icon: <DiHtml5 className="w-full h-14 duration-700" />,
    text: "HTML 5",
  },
  {
    icon: <DiCss3 className="w-full h-14 duration-700" />,
    text: "CSS 3",
  },
  {
    icon: <DiSass className="w-full h-14 duration-700" />,
    text: "Sass",
  },
  {
    icon: <DiLess className="w-full h-16 duration-700" />,
    text: "Less",
  },
  {
    icon: <DiDatabase className="w-full h-14 duration-700" />,
    text: "Database",
  },
  {
    icon: <DiPostgresql className="w-full h-14 duration-700" />,
    text: "Postgresql",
  },
  {
    icon: <DiMysql className="w-full h-14 duration-700" />,
    text: "MySql",
  },
  {
    icon: <DiSqllite className="w-full h-14 duration-700" />,
    text: "Sqlite",
  },
  {
    icon: <DiGit className="w-full h-14 duration-700" />,
    text: "Git",
  },
  {
    icon: <ColdfusionIcon className="w-full h-14 duration-700" />,
    text: "Coldfusion",
  },
  {
    icon: <DiJqueryLogo className="w-full h-14 duration-700" />,
    text: "Jquery",
  },
  {
    icon: <DiJavascript1 className="w-full h-14 duration-700" />,
    text: "Javascript",
  },
  {
    icon: <CobolIcon className="w-full h-16 duration-700" />,
    text: "Cobol",
  },
];

export const experiences: ExpericenceProps[] = [
  {
    title: "Desenvolvedor React Pleno",
    company: "W3bLock",
    linkCompany: "https://www.linkedin.com/company/weblock-io/",
    startDate: new Date("02.01.2022"),
    endDate: new Date("12.31.2022"),
    stack: [
      "NextJs",
      "ReactJS",
      "Redux",
      "Tailwind",
      "TypeScript",
      "Metodologias Agéis",
    ],
    locale: "Remoto",
  },
  {
    title: "Desenvolvedor React",
    company: "Supera Inovação em Tecnologia",
    linkCompany: "https://www.linkedin.com/company/supera-tecnologia/",
    startDate: new Date("02.08.2021"),
    endDate: new Date("01.31.2022"),
    stack: [
      "ReactJS",
      "Tailwind",
      "Redux",
      "TypeScript",
      "NextJs",
      "Styled Components",
      "Metodologias Agéis",
      "React Native",
      "SOLID",
      "Code Review",
      "MongoDb",
    ],
    locale: "Remoto",
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Click Interativo",
    linkCompany:
      "https://www.linkedin.com/company/click-interativo-ag-ncia-digital/",
    startDate: new Date("08.01.2021"),
    endDate: new Date("07.01.2022"),
    stack: ["ColdFusion", "MySql", "CSS3", "HTML5"],
    locale: "Presencial",
  },
  {
    title: "Programador Pleno",
    company: "Capgemini",
    linkCompany: "https://www.linkedin.com/company/capgemini/",
    startDate: new Date("08.01.2021"),
    endDate: new Date("07.01.2022"),
    stack: ["COBOL", "Metodologias Agéis", "Scrum"],
    locale: "Presencial",
  },
];

export const portfolioData = [
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/63c86818dacb0a297c67e8ac/screenshot_2023-01-18-21-44-53-0000.png",
    link: "https://pokedex-danilo-schleu.netlify.app/",
    title: "Pokedex",
  },
];
