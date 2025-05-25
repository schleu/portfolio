import classNames from "classnames";
import { differenceInYears } from "date-fns";
import { useEffect, useState } from "react";
import { FiCode, FiUsers } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { Link, scroller } from "react-scroll";
import ProfileImage from "../../assets/profile.webp";
import ProfileImage2 from "../../assets/profile2.jpg";
import { Container } from "../../components/Container";
import {
  AboutFilter,
  FilterAboutType,
} from "../Home/components/About/AboutFilter";
import { Experience } from "../Home/components/About/Experience";
import { experienciesMoked } from "../Home/components/About/moked";
import { Paragraph } from "../Home/components/About/Paragraph";

enum ScrollIds {
  ABOUT_ME = "about-me",
  MY_JOURNEY = "my-journey",
  MY_CHARACTERISTICS = "my-characteristics",
  MY_HARD_SKILLS = "my-hard-skills",
  MY_SOFT_SKILLS = "my-soft-skills",
}

export const AboutPage = () => {
  const [filter, setFilter] = useState<FilterAboutType>("recente");
  const [stack, setStack] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState<string>(
    ScrollIds.ABOUT_ME
  );

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Juazeiro do Norte - Ceará";

  const experiencies = experienciesMoked.sort((a, b) => {
    if (filter === "recente")
      return b.startDate.getTime() - a.startDate.getTime();
    if (filter === "antigo")
      return a.startDate.getTime() - b.startDate.getTime();
    return 0;
  });

  const experienciesFiltered = experiencies.filter((exp) => {
    return exp.stack.some((s) => stack.includes(s));
  });

  function handleFilterChange(filter: FilterAboutType, stack: string[]) {
    setFilter(filter);
    setStack(stack);
  }

  const hardSkills = [...new Set(experiencies.map((exp) => exp.stack).flat())];

  const softSkills = [
    {
      category: "Autoconhecimento & Aprendizado",
      skills: [
        {
          title: "Aprendizado com propósito",
          description:
            "Gosto de aprender o que será útil e aplicável no meu dia a dia profissional.",
        },
        {
          title: "Consciência pessoal",
          description:
            "Sei identificar meus limites e estou sempre buscando evoluir com base em experiências reais.",
        },
        {
          title: "Abertura ao feedback",
          description:
            "Recebo críticas construtivas com naturalidade e estou sempre disposto a melhorar.",
        },
      ],
    },
    {
      category: "Colaboração & Comunicação",
      skills: [
        {
          title: "Espírito de equipe",
          description:
            "Estou sempre disponível para ajudar, colaborando com leveza e comprometimento.",
        },
        {
          title: "Boa comunicação interpessoal",
          description: "Dou e recebo feedbacks com respeito e empatia.",
        },
        {
          title: "Escuta ativa",
          description:
            "Sei ouvir, considerar diferentes perspectivas e adaptar minha postura quando necessário.",
        },
      ],
    },
    {
      category: "Responsabilidade & Resiliência",
      skills: [
        {
          title: "Assumo responsabilidade",
          description:
            "Não fujo de erros ou problemas — assumo quando necessário, sempre com foco em soluções.",
        },
        {
          title: "Autonomia e iniciativa",
          description:
            "Tento resolver sozinho antes de pedir ajuda, o que me torna mais resiliente e independente.",
        },
        {
          title: "Persistência",
          description:
            "Busco todas as alternativas antes de desistir ou escalar um problema.",
        },
      ],
    },
    {
      category: "Foco & Organização",
      skills: [
        {
          title: "Clareza de objetivos",
          description:
            "Sei onde quero chegar e busco projetos que estejam alinhados com meus valores e visão de futuro.",
        },
        {
          title: "Praticidade",
          description:
            "Gosto de ir direto ao ponto e manter foco no que realmente faz diferença no resultado.",
        },
      ],
    },
  ];

  useEffect(() => {
    if (stack.length === 0 && hardSkills.length > 0) {
      setStack(hardSkills);
    }
  }, [hardSkills]);

  function MenuItem({ id, text }: { id: string; text: string }) {
    const handleClick = () => {
      setCurrentSection(id);
      scroller.scrollTo(id, {
        offset: -150,
        smooth: true,
      });
    };

    return (
      <li
        className={classNames(
          " text-xs md:text-base cursor-pointer transition-all duration-1000 ease-in-out",
          currentSection === id ? "text-dark-50" : "text-dark-50/40"
        )}
      >
        <button className="w-full text-start" onClick={handleClick}>
          {text}
        </button>
      </li>
    );
  }

  function Title({
    id,
    text,
    icon,
  }: {
    id: string;
    text: string;
    icon: React.ReactNode;
  }) {
    return (
      <h3
        id={id}
        className="font-bold text-2xl leading-9 flex flex-row gap-2 items-center"
      >
        {icon} {text}
      </h3>
    );
  }

  useEffect(() => {
    const handleScroll = (e: any) => {
      const sections = document.querySelectorAll("h3");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (currentSection) {
        const id = currentSection.id;
        if (id !== "") {
          setCurrentSection(id);
        }
        const menuItem = document.querySelector(`a[href="#${id}"]`);
        if (menuItem) {
          menuItem.classList.add("text-primary");
        }
      }
      //   console.log("scroll", e);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      classes={{
        container: "relative",
      }}
    >
      <div className="flex flex-col gap-6 sm:gap-16 w-full overflow-hidden max-w-[calc(100vw-240px)] text-dark-100  overflow-x-visible pr-4 animate-fadeIn border-b border-primary">
        <div className="flex flex-col gap-10 ">
          {/* Quem sou eu? */}
          <div className="flex flex-col gap-10 ">
            <Title
              id={ScrollIds.ABOUT_ME}
              text="Quem é Danilo Schleu?"
              icon={<></>}
            />

            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <Paragraph id={ScrollIds.ABOUT_ME}>
                  Desenvolvedor Full Stack, tecnólogo em Análise e
                  Desenvolvimento de Sistemas pela Cesumar. Solteiro, {age}{" "}
                  anos, residente em {city}. Apaixonado por esportes, estou
                  sempre buscando experimentar novas atividades físicas. No
                  tempo livre, gosto de explorar receitas na cozinha e me
                  desconectar com uma boa série ou filme.
                </Paragraph>
                <img
                  src={ProfileImage}
                  className={classNames(
                    "h-52 w-56 rounded-full object-cover z-10 hover:scale-110 transition-all duration-700 ease-in-out float-right"
                  )}
                  alt="Foto do Danilo usando um casaco rosa escrito NASA, utilizando um notebook."
                />
              </div>

              <Paragraph id={""}>
                Atuo como desenvolvedor full stack, mas tenho uma afinidade
                muito maior com a parte lógica e estrutural dos sistemas do que
                com a camada visual. Gosto de trabalhar com regras de negócio,
                integrações, automações e arquiteturas bem definidas. Meu foco
                está em entregar soluções robustas, eficientes e pensadas para
                facilitar a vida de quem vai usá-las.
              </Paragraph>

              <Paragraph id={""}>
                Sou movido por propósito. Amo aprender, mas tenho dificuldade em
                me atualizar com coisas que não pretendo usar — meu aprendizado
                é muito mais eficaz quando entendo a utilidade real do que estou
                estudando.
              </Paragraph>

              <Paragraph id={""}>
                Valorizo ambientes colaborativos e estou sempre pronto para
                ajudar quem precisa. Tenho certa resistência em pedir ajuda, e
                só o faço quando percebo que já esgotei minhas tentativas. Ainda
                assim, não tenho problema algum em assumir responsabilidades ou
                reconhecer meus erros.
              </Paragraph>

              <Paragraph id={""}>
                Sou adepto de uma cultura de feedback constante — gosto de ouvir
                críticas construtivas e também me disponho sempre a dar
                feedbacks com empatia e clareza. Acredito que o crescimento
                profissional vem da troca, da escuta e do esforço contínuo em
                evoluir como pessoa e como profissional.
              </Paragraph>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className="flex flex-col gap-6">
            <Title
              id={ScrollIds.MY_HARD_SKILLS}
              text="Habilidades técnicas"
              icon={<FiCode />}
            />

            <div className="flex flex-wrap gap-4">
              {hardSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 border border-primary rounded-md px-2 py-1"
                >
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades interpessoais */}
          <div className="flex flex-col gap-6">
            <Title
              id={ScrollIds.MY_SOFT_SKILLS}
              text="Habilidades interpessoais"
              icon={<FiUsers />}
            />

            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.category}
                  className="flex flex-col gap-2 px-2 py-1"
                >
                  <p className="text-lg font-bold">{skill.category}</p>
                  <div className="flex flex-col gap-2 ml-4">
                    {skill.skills.map((skill) => (
                      <div key={skill.title}>
                        <p className="text-base font-semibold">{skill.title}</p>
                        <p className="text-sm text-dark-100/50">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minha jornada */}
          <div className="flex flex-col gap-6 border-l border-primary pl-4">
            <div className="flex justify-between gap-2">
              <Title
                id={ScrollIds.MY_JOURNEY}
                text="Minha jornada"
                icon={<GiPathDistance />}
              />

              <AboutFilter onFilterChange={handleFilterChange} />
            </div>

            {experienciesFiltered.map((exp) => (
              <Experience key={exp.company} {...exp} />
            ))}
          </div>
        </div>

        <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
          "Os limites só existem se você os deixar existir." - Son Goku
        </p>
      </div>

      <div className="hidden sm:block fixed top-20 right-0 Z-0 h-full ">
        <div className="flex flex-col gap-6 border-l border-primary pt-4 pb-20">
          <ul className="list-none pl-6 flex flex-col gap-2">
            <MenuItem id={ScrollIds.ABOUT_ME} text="Quem sou eu?" />
            <MenuItem
              id={ScrollIds.MY_HARD_SKILLS}
              text="Habilidades técnicas"
            />
            <MenuItem
              id={ScrollIds.MY_SOFT_SKILLS}
              text="Habilidades interpessoais"
            />
            <MenuItem id={ScrollIds.MY_JOURNEY} text="Minha jornada" />
          </ul>
        </div>
      </div>
    </Container>
  );
};
