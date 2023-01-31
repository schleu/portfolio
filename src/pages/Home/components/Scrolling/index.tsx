import { ReactComponent as LightingIcon } from "../../../../assets/lighting.svg";
import { ReactComponent as BracketsIcon } from "../../../../assets/brackets.svg";
import { ReactComponent as SmileIcon } from "../../../../assets/smile.svg";
import { ReactComponent as AmpersandIcon } from "../../../../assets/ampersand.svg";
import { ReactComponent as HandWaveIcon } from "../../../../assets/handWave.svg";

export const Scrolling = () => (
  <div className="w-full flex-nowrap bg-[#262626] overflow-hidden ">
    <div className="w-full flex gap-6 items-center py-2 font-bold text-base leading-5 sm:textx-2xl justify-center">
      <h5>Websites</h5>
      <BracketsIcon />
      <LightingIcon />
      <h5>E-commerces</h5>
      <SmileIcon />
      <h5>Aplicativos</h5>
      <AmpersandIcon />
      <h5>Sistemas Web</h5>
      <HandWaveIcon />
    </div>
  </div>
);
