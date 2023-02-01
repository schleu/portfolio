import { ReactComponent as LightingIcon } from "../../../../assets/lighting.svg";
import { ReactComponent as BracketsIcon } from "../../../../assets/brackets.svg";
import { ReactComponent as SmileIcon } from "../../../../assets/smile.svg";
import { ReactComponent as AmpersandIcon } from "../../../../assets/ampersand.svg";
import { ReactComponent as HandWaveIcon } from "../../../../assets/handWave.svg";
import { ParallaxText } from "./ParallaxText";

export const Scrolling = () => (
  <div className="w-full flex-nowrap bg-light-900 shadow-xl border-t dark:border-none  dark:bg-dark-500  overflow-hidden z-0 ">
    <ParallaxText>
      <div className="w-full flex gap-6 items-center py-2 font-bold text-base leading-5 sm:textx-2xl justify-center cursor-default">
        <h5>Websites</h5>
        <BracketsIcon className="text-primary" />
        <LightingIcon className="text-primary" />
        <h5>E-commerces</h5>
        <SmileIcon className="text-primary" />
        <h5>Aplicativos</h5>
        <AmpersandIcon className="text-primary" />
        <h5>Sistemas Web</h5>
        <HandWaveIcon className="text-primary" />
      </div>
    </ParallaxText>
  </div>
);

/*

 */
