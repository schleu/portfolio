import { About } from "./components/About";
import { Skills } from "./components/Skills";

import { HardSkills, SoftSkills } from "../../api";
import { Portfolio } from "./components/Portfolio";
import { useTranslation } from "react-i18next";
import { IoExtensionPuzzleOutline, IoTerminalOutline } from "react-icons/io5";

export const Home = () => {
  const [translate] = useTranslation();

  return (
    <div className="w-full max-w-[1440px] flex flex-col overflow-y-auto gap-10 pt-10 pb-20 px-10">
      <About />

      <Skills
        title={translate("skills>softSkill")}
        titleIcon={<IoExtensionPuzzleOutline />}
        items={SoftSkills}
      />

      <Skills
        title={translate("skills>hardSkill")}
        titleIcon={<IoTerminalOutline />}
        items={HardSkills}
      />

      <Portfolio />
    </div>
  );
};
