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

import {ReactComponent as CobolIcon} from '../../../../assets/cobolIcon.svg'
import {ReactComponent as ColdfusionIcon} from '../../../../assets/coldfusionIcon.svg'

export const HardSkills = [
  {
    icon: <DiReact className="w-full h-16 duration-700" />,
    text: "React",
    description: "Biblioteca JavaScript para criação de interfaces web.",
  },
  {
    icon: <DiNodejsSmall className="w-full h-16 duration-700" />,
    text: "NodeJs",
    description: "Plataforma JavaScript para desenvolvimento em servidor web.",
  },
  {
    icon: <SiTypescript className="w-full h-14 duration-700" />,
    text: "TypeScript",
    description: "Linguagem de programação tipada para JavaScript moderno.",
  },
  {
    icon: <DiHtml5 className="w-full h-14 duration-700" />,
    text: "HTML 5",
    description: "Linguagem de marcação para conteúdo web.",
  },
  {
    icon: <DiCss3 className="w-full h-14 duration-700" />,
    text: "CSS 3",
    description: "Linguagem para estilizar conteúdo na web.",
  },
  {
    icon: <DiSass className="w-full h-14 duration-700" />,
    text: "Sass",
    description: "Pré-processador de CSS com funcionalidades avançadas.",
  },
  {
    icon: <DiLess className="w-full h-16 duration-700" />,
    text: "Less",
    description: "Pré-processador de CSS com funcionalidades avançadas.",
  },
  {
    icon: <DiDatabase className="w-full h-14 duration-700" />,
    text: "Database",
    description: "Armazenamento organizado e acessível de informações digitais.    ",
  },
  {
    icon: <DiPostgresql className="w-full h-14 duration-700" />,
    text: "Postgresql",
    description: "Banco de dados relacional de código aberto.",
  },
  {
    icon: <DiMysql className="w-full h-14 duration-700" />,
    text: "MySql",
    description: "Banco de dados relacional de alta performance.",
  },
  {
    icon: <DiSqllite className="w-full h-14 duration-700" />,
    text: "Sqlite",
    description: "Banco de dados leve e autocontido em arquivo.",
  },
  {
    icon: <DiGit className="w-full h-14 duration-700" />,
    text: "Git",
    description: "Sistema de controle de versão distribuído popular.",
  },
  {
    icon: <ColdfusionIcon className="w-full h-14 duration-700" />,
    text: "Coldfusion",
    description:"Linguagem de programação para desenvolvimento web dinâmico.",
  },
  {
    icon: <DiJqueryLogo className="w-full h-14 duration-700" />,
    text: "Jquery",
    description: "Biblioteca JavaScript popular para manipulação HTML/CSS.",
  },
  {
    icon: <DiJavascript1 className="w-full h-14 duration-700" />,
    text: "Javascript",
    description: "Linguagem de programação de scripts para web.",
  },
  {
    icon: <CobolIcon className="w-full h-16 duration-700" />,
    text: "Cobol",
    description:"Linguagem de programação antiga para negócios empresariais.",
  },
];
