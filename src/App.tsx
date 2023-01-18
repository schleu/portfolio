import { About } from "./components/About";
import { Habilits } from "./components/Habilits";
import { Header } from "./components/Header/Header";

import ReactJs from "./assets/reactJs.svg";

import "./main.css";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-300 w-full relative font-roboto flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <div className="w-full max-w-[1440px] px-10 flex flex-col overflow-y-auto">
        <About />
        <ProfessionalExperience />
        <div className="flex flex-col gap-8">
          <Habilits
            title="Hard Skill"
            items={[
              { image: ReactJs, text: "React" },
              { image: ReactJs, text: "React1" },
              { image: ReactJs, text: "React2" },
              { image: ReactJs, text: "React3" },
              { image: ReactJs, text: "React4" },
            ]}
          />
          <Habilits
            title="Soft Skill"
            items={[
              { image: ReactJs, text: "React" },
              { image: ReactJs, text: "React1" },
              { image: ReactJs, text: "React2" },
              { image: ReactJs, text: "React3" },
              { image: ReactJs, text: "React4" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
