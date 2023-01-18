import classNames from "classnames";
import { ReactNode, useState } from "react";
import { Expericence, ExpericenceProps } from "./Expericence";

const experiencesDefault: ExpericenceProps[] = [
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

export const ProfessionalExperience = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 py-10">
      <h1 className="text-3xl drop-shadow-sm">Experciencias:</h1>
      <div
        className={classNames(
          "flex flex-col w-full gap-10 overflow-hidden transition-transform ease-in-out py-10",
          showMore ? "" : "max-h-[200px]"
        )}
      >
        {experiencesDefault.map((item, index) => (
          <Expericence key={index} {...item} />
        ))}
      </div>
      {showMore ? (
        <Button onClick={() => setShowMore(false)}>Ver menos</Button>
      ) : (
        <Button onClick={() => setShowMore(true)}>Ver mais</Button>
      )}
    </div>
  );
};

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => (
  <div className="flex justify-center w-full">
    <button
      onClick={() => onClick()}
      className=" shadow-md hover:shadow-lg py-2 px-10 rounded-full bg-green-360/90 hover:bg-green-360 cursor-pointer text-white font-bold"
    >
      {children}
    </button>
  </div>
);
