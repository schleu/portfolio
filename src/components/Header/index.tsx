import { Link } from "react-router-dom";
import { ReactComponent as ChatCircleIcon } from "../../assets/chatCircle.svg";
import { ReactComponent as LogoIcon } from "../../assets/brackets.svg";
import { Button } from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";

const menuItemsMocked = [
  { text: "Início", link: "" },
  { text: "Serviços", link: "" },
  { text: "Portfólio", link: "" },
  { text: "Sobre Mim", link: "" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-[#12121280] backdrop-blur-md border-b border-[#262626]">
      <div className="w-full max-w-[1234px] flex justify-between items-center font-bold h-full px-2.5 sm:p-0 relative">
        <div className="flex gap-2.5 items-center cursor-default">
          <LogoIcon /> Danilo Schleu
        </div>

        <GiHamburgerMenu
          onClick={() => setIsOpen((e) => !e)}
          className="md:hidden cursor-pointer"
        />

        <MenuMobile
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={menuItemsMocked}
        />

        <div className="hidden md:flex gap-6 h-full">
          {menuItemsMocked.map((item) => (
            <NavLink key={item.text} link={item.link} text={item.text} />
          ))}
        </div>

        <Button className="hidden md:flex">
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
    className="flex  items-center h-full border-b-2 border-transparent hover:border-primary "
  >
    {text}
  </Link>
);
