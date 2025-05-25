import { Link } from "react-scroll";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowRight.svg";
import { ScrollIds } from "../../constant/ScrollIds";
import { Button } from "../Button";
import { FiLinkedin } from "react-icons/fi";
import { SocialMedias } from "../SocialMedias";

export const Footer = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-dark-900 /80 backdrop-blur-md border-t border-light-200 border-light-200 border-dark-200 500">
      <div className="w-full max-w-[1234px] flex justify-between items-center font-bold h-full px-2.5 sm:px-0">
        <div className="flex gap-2.5 items-center cursor-default">
          Copyright© 2022 - Danilo Schleu
        </div>

        <div className="flex items-center gap-4">
          <SocialMedias />

          <Link
            href={ScrollIds.HOME}
            to={ScrollIds.HOME}
            smooth={true}
            alt="Move para o topo da pagina"
          >
            <Button
              className="bg-dark-300  w-10 h-10 p-0 hover:animate-bounce hover:ease-in-out"
              title="Move para o topo da pagina"
            >
              <ArrowRightIcon className="-rotate-90" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
