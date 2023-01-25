import { About } from "./components/About";
import { Skills } from "./components/Skills";

import { ReactComponent as ComandLineIcon } from "../../assets/comandLine.svg";
import { ReactComponent as PuzzlePieceIcon } from "../../assets/puzzlePiece.svg";

import { HardSkills, SoftSkills } from "../../api";
import { Portfolio } from "./components/Portfolio";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [translate] = useTranslation();

  return (
    <div className="w-full max-w-[1440px] flex flex-col overflow-y-auto gap-10 pt-10 pb-20 px-10">
      <About />

      <Skills
        title={translate("skills>softSkill")}
        titleIcon={<PuzzlePieceIcon className="w-10 h-10" />}
        items={SoftSkills}
      />

      <Skills
        title={translate("skills>hardSkill")}
        titleIcon={<ComandLineIcon className="w-10 h-10" />}
        items={HardSkills}
      />

      <Portfolio />
    </div>
  );
};
