import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header/Header";

import ReactJs from "./assets/reactJs.svg";

import "./main.css";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

import { ReactComponent as PuzzlePieceIcon } from "./assets/puzzlePiece.svg";
import { ReactComponent as ComandLineIcon } from "./assets/comandLine.svg";

function App() {
  return (
    <div className="bg-gray-300 w-full relative font-roboto flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <div className="w-full max-w-[1440px] flex flex-col overflow-y-auto gap-10 pt-10 pb-20 px-10">
        <About />

        <div className="flex flex-col gap-8">
          <Skills
            title="Hard Skill"
            titleIcon={<ComandLineIcon className="w-10 h-10" />}
            items={[
              { image: ReactJs, text: "React" },
              { image: ReactJs, text: "NodeJs" },
              { image: ReactJs, text: "TypeScript" },
              { image: ReactJs, text: "Coldfusion" },
              { image: ReactJs, text: "Cobol" },
            ]}
          />
          <Skills
            title="Soft Skill"
            titleIcon={<PuzzlePieceIcon className="w-10 h-10" />}
            items={[
              {
                image: ReactJs,
                text: "Vontade de aprender",
                alt: "Conseguir se adaptar a mudanças e desafios",
              },
              {
                image: ReactJs,
                text: "Resiliência",
                alt: "Conseguir se adaptar a mudanças e desafios",
              },
              {
                image: ReactJs,
                text: "Comunicação",
                alt: "Conseguir se adaptar a mudanças e desafios",
              },
              {
                image: ReactJs,
                text: "Proatividade",
                alt: "Habilidade para conseguir reagir a imprevistos, propondo soluções.",
              },
              {
                image: ReactJs,
                text: "Autonomia",
                alt: "Conseguir tomar decisões e realizar o trabalho sem precisar sempre de aval da liderança.",
              },
            ]}
          />
        </div>

        <ProfessionalExperience />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
