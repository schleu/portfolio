import { Link } from "react-router-dom";
import { ReactComponent as ChatCircleIcon } from "../../assets/chatCircle.svg";
import { ReactComponent as LogoIcon } from "../../assets/brackets.svg";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-[#12121280] backdrop-blur-md border-b border-[#262626]">
      <div className="w-full max-w-[1234px] flex justify-between items-center font-bold h-full">
        <div className="flex gap-2.5 items-center cursor-default">
          <LogoIcon /> Danilo Schleu
        </div>
        <div className="flex gap-6 h-full">
          <NavLink link="/" text="Início" />
          <NavLink link="/" text="Serviços" />
          <NavLink link="/" text="Portfólio" />
          <NavLink link="/" text="Sobre Mim" />
        </div>
        <Button>
          Entrar em contato
          <ChatCircleIcon />
        </Button>
      </div>
    </div>
  );
};

const NavLink = ({ text, link }: { text: string; link: string }) => (
  <Link
    to={link}
    className="flex  items-center h-full border-b-2 border-transparent hover:border-[#41B19B] "
  >
    {text}
  </Link>
);
