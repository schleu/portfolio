import classNames from "classnames";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { ReactComponent as LogoIcon } from "../../assets/brackets.svg";
import { ReactComponent as ChatCircleIcon } from "../../assets/chatCircle.svg";
import { Button } from "../Button";
import { MenuMobile } from "./MenuMobile";

const menuItemsMocked = [
  { text: "Início", link: "" },
  { text: "Serviços", link: "" },
  { text: "Portfólio", link: "" },
  { text: "Sobre Mim", link: "" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        "w-full h-[70px] flex justify-center items-center backdrop-blur-md border-b ",
        "bg-light-900 dark:bg-dark-900/80 border-light-500  dark:border-dark-500",
        "fixed top-0 z-50"
      )}
    >
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
