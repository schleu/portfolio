import { ReactComponent as AmpersandIcon } from "../../../../assets/ampersand.svg";
import { ReactComponent as BracketsIcon } from "../../../../assets/brackets.svg";
import { ReactComponent as LightingIcon } from "../../../../assets/lighting.svg";
import { ReactComponent as SmileIcon } from "../../../../assets/smile.svg";

export const Scrolling = () => (
  <>
    <div className="w-full flex-nowrap shadow-xl border-none bg-dark-500 overflow-hidden z-0 relative h-11">
      <div className="flex absolute top-1/2 animate-moveLeft -translate-y-1/2 ">
        {Array(15)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="w-full flex gap-6 items-center py-2 font-bold text-base leading-5 sm:textx-2xl justify-center cursor-default"
            >
              <Item text="Websites" />
              <LightingIcon className="text-primary" />
              <Item text="E-commerces" />
              <SmileIcon className="text-primary" />
              <Item text="Aplicativos" />
              <BracketsIcon className="text-primary" />
              <Item text="Sistemas Web" />
              <AmpersandIcon className="text-primary" />
            </div>
          ))}
      </div>
    </div>
  </>
);

const Item = ({ text }: { text: String }) => (
  <h5 className="w-[160px] text-center">{text}</h5>
);
