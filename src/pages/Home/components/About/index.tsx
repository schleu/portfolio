import classNames from "classnames";
import { differenceInYears } from "date-fns";
import ProfileImage from "../../../../assets/profile.webp";
import { Container } from "../../../../components/Container";
import { ScrollIds } from "../../../../constant/ScrollIds";
import { Experience } from "./Experience";
import { Paragraph } from "./Paragraph";

export const About = () => {
  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Salvador - Bahia";

  const experiencies = [
    {
      company: "InnovaUp",
      role: "Estagiário",
      description:
        "Desenvolvi alguns sistemas pequenos complementares em Delphi",
      startDate: new Date("01.01.2015"),
      finalDate: new Date("01.01.2016"),
      stack: ["Delphi"],
      projects: [
        {
          title: "Reporte de Error",
          description:
            "Projeto em delphi que captura a tela do cliente e permite descrever a duvida que possuia na tela. Atendimento ao cliente N1",
        },
      ],
    },
    {
      company: "Capgemini",
      role: "Desenvolvedor Pleno",
      description:
        "atuando com análise de código para atualização de sistemas gerados por um codemaker para uma versão de cobol mais atual. Metodologias ágeis.",
      startDate: new Date("02.01.2016"),
      finalDate: new Date("02.01.2019"),
      stack: ["COBOL", "Scrum", "Kanban"],
      projects: [],
    },
    {
      company: "Click Interativo",
      role: "Desenvolvedor Full Stack",
      description:
        "Atuei na manutenção e desenvolvimento de aplicações web, utilizando Coldfusion e MySql no backend. HTML5, CSS3, Javascript, Jquery no front.",
      startDate: new Date("08.01.2019"),
      finalDate: new Date("07.01.2021"),
      stack: ["ColdFusion", "MySql", "Javascript", "HTML5", "CSS3", "JQuery"],
      projects: [
        {
          title: "Cejas Online",
          description:
            "E-commerce, gestão de aulas e alunos, emissão de cerificado.",
        },
        {
          title: "B&A Imoveis",
          description: "Gerenciamento de leads e demanda dos corretores",
        },
        {
          title: "AlphaOnfit",
          description: "E-commerce, gestão de aulas e alunos",
        },
        {
          title: "Outros projetos",
          description:
            "Shopping Bela Vista, Faculdade SantaCasa, AlphaOnfit, Labchecap, Academia Alpha, Hammer, Reveillon Gran Hotel Stella Maris",
        },
      ],
    },
    {
      company: "Supera Inovação",
      role: "Desenvolvedor Front-end",
      description:
        " Utilizando React.JS, Typescript, Next.JS, Styled Components, ChakraUI, Tailwind no Frontend. NodeJS, mongoDB, Strapi no Backend. React Native no Mobile. Metodologias ágeis. Git para versionamento.",
      startDate: new Date("08.01.2021"),
      finalDate: new Date("01.01.2022"),
      stack: [
        "React.JS",
        "NodeJS",
        "React Native",
        "Typescript",
        "Next.JS",
        "Styled Components",
        "ChakraUI",
        "Tailwind",
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
  ];

  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      id={ScrollIds.ABOUT}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 sm:items-start">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] bg-dark-300 relative",
            "transition-all ease-in-out duration-700 animate-fadeInUp"
          )}
        >
          <div
            className={classNames(
              "border-b-8 border-r-8 absolute z-0",
              "border-primary bg-primary",
              "w-[212px] h-[278px] top-[3.2rem] left-[3.2rem]",
              "sm:w-[270px] sm:h-[368px] sm:top-8 sm:left-12",
              "transition-all ease-in-out duration-700"
            )}
          />
          <img
            src={ProfileImage}
            className={classNames(
              "h-full w-full object-cover z-20 absolute hover:scale-110 transition-all duration-700 ease-in-out"
            )}
            alt="Foto do Danilo usando um casaco rosa escrito NASA, utilizando um notebook."
          />
        </div>

        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-dark-100 h-screen overflow-y-scroll pr-4 animate-fadeIn ">
          <div className="flex flex-col gap-10 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>

            <div className="flex flex-col gap-6">
              <Paragraph>
                Desenvolvedor Full Stack, tecnólogo em análise e desenvovimento
                de sistemas pela Cesumar.
              </Paragraph>

              <Paragraph>
                <span className="flex flex-wrap gap-2 ">
                  Solteiro, {age} anos, residente em {city}, amante de esportes,{" "}
                  sempre estou procurando praticar algo novo. No tempo livre,
                  adoro me aventurar na cozinha, além de ver alguma série ou
                  filme.
                </span>
              </Paragraph>
            </div>

            <i>Aqui começa minha jornada profissional:</i>

            {experiencies.map((exp) => (
              <Experience
                company={exp.company}
                role={exp.role}
                description={exp.description}
                startDate={exp.startDate}
                finalDate={exp.finalDate}
                projects={exp.projects}
              />
            ))}
          </div>

          {/* <button
            onClick={() => setShowMore((e) => !e)}
            title="Mostrar ou Esconder todo o conteudo acima."
          >
            {showMore ? "Ver resumido" : "Ver projetos"}
          </button> */}

          <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
            "Os limites só existem se você os deixar existir." - Son Goku
          </p>
        </div>
      </div>
    </Container>
  );
};
