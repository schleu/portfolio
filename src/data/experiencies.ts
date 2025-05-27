export interface Project {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  startDate: Date;
  finalDate: Date | undefined;
  stack: string[];
  projects: Project[];
}
export const experienciesMoked: Record<string, Experience[]> = {
  en: [],
  pt: [
    {
      company: "InnovaUp",
      role: "Estagiário",
      description:
        "Responsável por atender o cliente N1, desenvolvi um sistema de abertura de chamado, onde o cliente pode descrever sua duvida, capturava a tela e envia para o suporte.",
      startDate: new Date("01.01.2015"),
      finalDate: new Date("01.01.2016"),
      stack: ["Delphi"],
      projects: [],
    },
    {
      company: "Capgemini",
      role: "Desenvolvedor Pleno",
      description:
        "Atuando com análise de código para atualização de sistemas gerados por um codemaker para uma versão de cobol mais atual.",
      startDate: new Date("02.01.2016"),
      finalDate: new Date("02.01.2019"),
      stack: ["COBOL", "Scrum", "Kanban", "Metodologias ágeis"],
      projects: [],
    },
    {
      company: "Click Interativo",
      role: "Desenvolvedor Full Stack",
      description:
        "Desenvolvimento focado no backend com ColdFusion e MySQL, participando também do frontend com JavaScript e jQuery. Responsável pela criação de novos sistemas, incluindo modelagem de banco de dados, arquitetura, desenvolvimento de APIs e interfaces. Atuei no planejamento completo dos projetos, desde a concepção até a entrega. Sendo um dos principais desafios a constante mudança de projetos, as vezes atuando em mais de um projeto ao mesmo tempo.",
      startDate: new Date("08.01.2019"),
      finalDate: new Date("07.01.2021"),
      stack: ["ColdFusion", "MySql", "Javascript", "HTML5", "CSS3", "JQuery"],
      projects: [
        {
          title: "Reveillon Gran Hotel Stella Maris",
          description:
            "Sistema de compra de ingressos e gerenciamento de entradas para o reveillon, foi solicitado a menos de 1 mês para a realização do evento. O sistema existente tinha dado centenas de problemas no ano anterior, e foi necessário refatorar todo o código. Reduzi a 0 a quantidade de erros e otimizei o sistema para que ele pudesse evitar a duplicação de entradas.",
        },
        {
          title: "Cejas Online",
          description:
            "E-commerce de cursos juridicos com aulas online, com gerenciamento de alunos, emissão de certificados e gerenciamento de aulas.",
        },
        {
          title: "B&A Imoveis",
          description:
            "Site imobiliário com gerenciamento de leads e demanda. Sendo o maior desafio a constante mudança de requisitos, e a necessidade de manter o sistema atualizado com as novas regras de negócios.",
        },
        {
          title: "Labchecap",
          description:
            "Site institucional para uma grande rede de laboratórios clínicos, incluindo desenvolvimento de sistema integrado para visualização de resultados de exames online, com autenticação segura e interface intuitiva para pacientes e médicos.",
        },
        {
          title: "Outros projetos",
          description:
            "Shopping Bela Vista, Faculdade SantaCasa, AlphaOnfit, Labchecap, Academia Alpha, Academia Hammer, Mosello Lima",
        },
      ],
    },
    {
      company: "Supera Inovação",
      role: "Desenvolvedor Front-end",
      description: "",
      startDate: new Date("08.01.2021"),
      finalDate: new Date("01.01.2022"),
      stack: [
        "React.JS",
        "NodeJS",
        "React Native",
        "Typescript",
        "Next.JS",
        "ChakraUI",
        "Tailwind",
        "Styled Components",
        "Strapi",
        "MongoDB",
        "Git",
        "GitLab",
        "Scrum",
        "Kanban",
      ],
      projects: [
        {
          title: "Algar",
          description: "Ajustes em aplicativo em react classe.",
        },
        {
          title: "Bristom",
          description:
            "Refatorar funções de classes para hooks, além de implementar algumas telas.",
        },
        {
          title: "Liver Mobile",
          description:
            "Refatorar funções de classes para hooks, desenvolvimento de novas features.",
        },
        {
          title: "Liver Web",
          description: "Implementação de telas e suas funcionalidades",
        },
        {
          title: "Daexe",
          description: "Site institucional.",
        },
        {
          title: "Sapcana",
          description: "Formulários dinâmicos com validação.",
        },
        {
          title: "GetJus",
          description: "Análise de erro e correção.",
        },
      ],
    },
    {
      company: "W3block.io",
      role: "Desenvolvedor Front-end Pleno",
      description:
        "Utilizando Typescript, Tailwind, Next.JS, React.JS, Styled Components. Metodologias ágeis. Git para versionamento.",
      startDate: new Date("02.01.2022"),
      finalDate: new Date("12.01.2022"),
      stack: [
        "React.JS",
        "Typescript",
        "Next.JS",
        "Tailwind",
        "Git",
        "GitHub",
        "Scrum",
        "Kanban",
      ],
      projects: [
        {
          title: "Eventix",
          description: "Ticketeria",
        },
        {
          title: "Foodburster",
          description: "Clube de Beneficios",
        },
        {
          title: "SDK",
          description: "implementação de novas features",
        },
      ],
    },
    {
      company: "Hiperbanco",
      role: "Desenvolvedor React",
      description:
        "Utilizando Typescript, MaterialUI, React.JS. Metodologias ágeis. Git para versionamento.",
      startDate: new Date("04.01.2023"),
      finalDate: new Date("09.01.2023"),
      stack: [
        "React.JS",
        "Typescript",
        "ChakraUI",
        "Git",
        "GitHub",
        "Scrum",
        "Kanban",
      ],
      projects: [
        {
          title: "Internet Banking",
          description:
            "Substituí o Metronic pelo Vite, efetuei uma atualização completa, reestruturei o projeto, corrigi erros e implementei a seção completa de folha de pagamento.",
        },
        {
          title: "Credit as a Service",
          description: "Serviço de solicitação de crédito online.",
        },
        {
          title: "Geopay",
          description: "Serviço de checkout.",
        },
      ],
    },
    {
      company: "OMP",
      role: "Desenvolvedor Full Stack",
      description: `
          Desenvolvimento front-end plataforma de criação de memes com IA generativa, distribuição autônoma e sistema de monetização, utilizando ReactJS, Vite, Tailwind, Redux e Shadcn.\r\n
          Desenvolvimento back-end utilizando Python com FastAPI, Firestore e Google Cloud.`,
      startDate: new Date("01.01.2024"),
      finalDate: undefined,
      stack: [
        "Python",
        "React.JS",
        "Typescript",
        "Tailwind",
        "Shadcn",
        "Git",
        "GitHub",
        "Kanban",
      ],
      projects: [
        {
          title: "MyMeme",
          description:
            "Plataforma de criação de memes com IA generativa, distribuição autônoma e sistema de monetização.",
        },
        {
          title: "PaalX",
          description: "Plataforma de transação de crypto moedas.",
        },
      ],
    },
  ],
};
