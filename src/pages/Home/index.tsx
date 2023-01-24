import { About } from "./components/About";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero";
import { Skills } from "./components/Skills";

import { ReactComponent as ComandLineIcon } from "../../assets/comandLine.svg";
import { ReactComponent as PuzzlePieceIcon } from "../../assets/puzzlePiece.svg";

import { Footer } from "../../components/Footer";
import { Portfolio } from "./components/Portfolio";
import { HardSkills, SoftSkills } from "../../api";

export const Home = () => (
  <div className="w-full max-w-[1440px] flex flex-col overflow-y-auto gap-10 pt-10 pb-20 px-10">
    <About />

    <Skills
      title="Soft Skills"
      titleIcon={<PuzzlePieceIcon className="w-10 h-10" />}
      items={SoftSkills}
    />

    <Skills
      title="Hard Skills"
      titleIcon={<ComandLineIcon className="w-10 h-10" />}
      items={HardSkills}
    />

    <Portfolio />
  </div>
);
