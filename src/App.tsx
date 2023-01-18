import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header/Header";

import ReactJs from "./assets/reactJs.svg";

import "./main.css";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="bg-gray-300 w-full relative font-roboto flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <div className="w-full max-w-[1440px] flex flex-col overflow-y-auto gap-10 pt-10 pb-20 px-10">
        <About />
        <ProfessionalExperience />
        <div className="flex flex-col gap-8">
          <Skills
            title="Hard Skill"
            items={[
              { image: ReactJs, text: "React" },
              { image: ReactJs, text: "React1" },
              { image: ReactJs, text: "React2" },
              { image: ReactJs, text: "React3" },
              { image: ReactJs, text: "React4" },
            ]}
          />
          <Skills
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

        <Portfolio />
      </div>
    </div>
  );
}

export default App;
