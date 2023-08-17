import classNames from "classnames";
import { differenceInYears } from "date-fns";
import { ReactNode, useState } from "react";
import { Container } from "../../../../components/Container";
import { ScrollIds } from "../../../../constant/ScrollIds";
import ProfileImage from "../../../../assets/profile.webp";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  const age = differenceInYears(new Date(), new Date("02/18/1993"));
  const city = "Salvador - Bahia";

  return (
    <Container
      title="Um pouco da minha história"
      section="Sobre mim"
      id={ScrollIds.ABOUT}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 sm:items-center">
        <div
          className={classNames(
            "w-[255px] sm:w-[310px] h-[322px] sm:h-[392px] bg-dark-300  relative",
            "before:content-[''] before:absolute before:border-b-8 before:border-r-8 before:border-primary",
            "before:w-[212px] before:h-[278px] before:top-[3.2rem] before:left-[3.2rem]",
            "sm:before:w-[270px] sm:before:h-[368px] sm:before:top-8 sm:before:left-12"
          )}
        >
          <img
            src={ProfileImage}
            className="h-full w-full object-cover"
            alt="Foto do Danilo usando um casaco rosa escrito NASA, utilizando um notebook."
          />
        </div>
        <div className="flex flex-col gap-6 sm:gap-16 max-w-[800px] text-dark-100 ">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-2xl leading-9">
              Quem é Danilo Schleu?
            </h3>
            <Paragraph>
              Desenvolvedor Full Stack, tecnólogo em analise e desenvovimento de
              sistemas pela Cesumar.
            </Paragraph>

            <Paragraph>
              <span className="flex flex-wrap gap-2 ">
                Solteiro, {age} anos, residente em {city}, amante de esportes,{" "}
                sempre estou procurando algo novo praticar. No tempo livre,
                adoro me aventurar na cozinha. Além de ver alguma série ou
                filme.
              </span>
            </Paragraph>

            <i>Aqui começa minha jornada profissional:</i>

            <Paragraph>
              <span className="flex flex-wrap gap-2">
                [ Jan 2015 - Jan 2016 ] - Estagiário na InnovaUp,
                <div
                  className={classNames(
                    "text-primary overflow-hidden bg-white/5 p-1 rounded-md",
                    "transition-all duration-1000 ease-in-out ",
                    showMore ? "text-sm" : "text-[0px] w-0 hidden"
                  )}
                >
                  <i className="text-primary">
                    {" "}
                    atuei maior parte do tempo como N1(suporte),
                  </i>
                </div>{" "}
                fiz alguns sistemas pequenos complementares em Delphi.
              </span>
            </Paragraph>

            {/* Capgemini */}
            <Paragraph>
              [ Fev 2016 - Fev 2019 ] Desenvolvedor Pleno na Capgemini, atuando
              com analise de código para atualização de sistemas gerados por um
              codemaker para uma versão de cobol mais atual. Metodologias ágeis.
            </Paragraph>

            {/* Click Interativo */}
            <Paragraph>
              [ Ago 2019 - Jul 2021 ] Desenvolvedor Full Stack na Click
              Interativo, atuei na manutenção e desenvolvimento de aplicações
              web.
              <div
                className={classNames(
                  "text-primary bg-white/5 p-2 rounded-md",
                  "transition-all duration-1000 ease-in-out",
                  showMore
                    ? "h-[100px]  overflow-y-auto"
                    : "h-0 overflow-hidden w-0 p-0"
                )}
              >
                <Project
                  title="Cejas Online"
                  description="E-commerce, gestão de aulas e alunos, emissão de
                      cerificado."
                />
                <Project
                  title="B&A Imoveis"
                  description="Gerenciamento de leads e demanda dos corretores"
                />
                <Project
                  title="AlphaOnfit"
                  description="E-commerce, gestão de aulas e alunos"
                />
                <Project
                  title="Outros projetos"
                  description="Shopping Bela Vista, Faculdade SantaCasa, AlphaOnfit,
                    Labchecap, Academia Alpha, Hammer, Reveillon Gran Hotel
                    Stella Maris"
                />
              </div>
              Utilizando Coldfusion e MySql no backend. HTML5, CSS3, Javascript,
              Jquery no front.
            </Paragraph>

            {/* Supera */}
            <Paragraph>
              [Ago 2021 - Jan 2022] Desenvolvedor React na Supera Inovação.
              <div
                className={classNames(
                  "text-primary overflow-hidden bg-white/5 p-2 rounded-md",
                  "transition-all duration-1000 ease-in-out overflow-y-auto",
                  showMore ? "h-[100px]" : "h-0 overflow-hidden w-0 p-0"
                )}
              >
                <Project
                  title="Algar"
                  description="Ajustes em aplicativo em react classe."
                />
                <Project
                  title="Bristom"
                  description="Refatorar funções de classes para hooks, além de implementar algumas telas."
                />
                <Project
                  title="Liver Mobile"
                  description="Refatorar funções de classes para hooks, desenvovimento novas funções."
                />
                <Project
                  title="Liver Web"
                  description="Implementação de telas e suas funcionalidades"
                />
                <Project title="Daexe" description="Site institucional." />
                <Project
                  title="Sapcana"
                  description="Formulários dinâmicos com validação."
                />
                <Project
                  title="GetJus"
                  description="Analise de erro e correção."
                />
              </div>
              Utilizando React.JS, Typescript, Next.JS, Styled Components,
              ChakraUI, Tailwind no Frontend. NodeJS, mongoDB, Strapi no
              Backend. React Native no Mobile. Metodologias ágeis. Git para
              versionamento.
            </Paragraph>

            {/* W3block */}
            <Paragraph>
              [Fev 2022 - Dez 2022] Desenvolvedor Pleno na W3block.io.
              <div
                className={classNames(
                  "text-primary overflow-hidden bg-white/5 p-2 rounded-md",
                  "transition-all duration-1000 ease-in-out overflow-y-auto",
                  showMore ? "h-[100px]" : "h-0 w-0 p-0 overflow-hidden "
                )}
              >
                <Project title="Eventix" description="Ticketeria" />
                <Project
                  title="Foodburster"
                  description="Clube de Beneficios"
                />
                <Project
                  title="SDK"
                  description="implementação de novas features"
                />
              </div>
              Utilizando Typescript, Tailwind, Next.JS, React.JS, Styled
              Components. Metodologias ágeis. Git para versionamento.
            </Paragraph>

            {/* Hiperbanco */}
            <Paragraph>
              [Abr 2023 - Atualmente] Desenvolvedor Pleno no Hiperbanco.
              <div
                className={classNames(
                  "text-primary overflow-hidden bg-white/5 p-2 rounded-md",
                  "transition-all duration-1000 ease-in-out overflow-y-auto",
                  showMore ? "h-[100px]" : "h-0 w-0 p-0 overflow-hidden "
                )}
              >
                <Project
                  title="Internet Banking"
                  description="Substituí o Metronic pelo Vite, efetuei uma atualização completa, reestruturei o projeto, corrigi erros e implementei a seção completa de folha de pagamento."
                />
                <Project
                  title="Credit as a Service"
                  description="Serviço de solicitação de crédito online."
                />
                <Project title="Geopay" description="Serviço de checkout." />
              </div>
              Utilizando Typescript, MaterialUI, React.JS. Metodologias ágeis.
              Git para versionamento.
            </Paragraph>
          </div>

          <button
            onClick={() => setShowMore((e) => !e)}
            title="Mostrar ou Esconder todo o conteudo acima."
          >
            {showMore ? "Ver resumido" : "Ver completo"}
          </button>

          <p className="font-normal text-base sm:text-xl leading-8 text-dark-100/50">
            "Os limites só existem se você os deixar existir." - Son Goku
          </p>
        </div>
      </div>
    </Container>
  );
};

const Paragraph = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[600px] font-normal text-sm leading-6 sm:text-normal sm:leading-7 ">
    {children}
  </div>
);

const Project = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <h3 className="w-32">{title}</h3>
    <p className="flex-1">{description}</p>
  </div>
);
