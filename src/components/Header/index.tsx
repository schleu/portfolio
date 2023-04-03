import classNames from "classnames";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useLocation } from "react-use";
import { ReactComponent as LogoIcon } from "../../assets/brackets.svg";
import { ReactComponent as ChatCircleIcon } from "../../assets/chatCircle.svg";
import { AppRoutes } from "../../constant/AppRoutes";
import { localStorageKeys } from "../../constant/LocalStorageKeys";
import { ScrollIds } from "../../constant/ScrollIds";
import { Button } from "../Button";
import { MenuMobile } from "./MenuMobile";

const menuItemsMocked = [
  { text: "Início", link: ScrollIds.HOME, onClick: () => {} },
  {
    text: "Serviços",
    link: ScrollIds.SERVICES,
    onClick: () => {},
  },
  { text: "Portfólio", link: ScrollIds.PORTFOLIO, onClick: () => {} },
  { text: "Sobre Mim", link: ScrollIds.ABOUT, onClick: () => {} },
  { text: "Contato", link: ScrollIds.CONTACT, onClick: () => {}, mobile: true },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const ls = localStorage.getItem(localStorageKeys.scroll);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && ls !== null) {
      scroller.scrollTo(JSON.parse(ls).link, {
        smooth: true,
      });
      localStorage.removeItem(localStorageKeys.scroll);
    }
  }, [location.pathname, ls]);

  function Scrolling(scroll: string) {
    localStorage.setItem(
      localStorageKeys.scroll,
      JSON.stringify({ link: scroll })
    );
    navigate(AppRoutes.HOME);
  }

  return (
    <div
      className={classNames(
        "w-full h-[70px] flex justify-center items-center backdrop-blur-md border-b ",
        "bg-dark-900/80 border-dark-500",
        "fixed top-0 z-50"
      )}
    >
      <div className="w-full max-w-[1234px] flex justify-between items-center font-bold h-full px-2.5 sm:p-0 relative">
        <nav
          onClick={() => Scrolling(ScrollIds.HOME)}
          className="flex gap-2.5 items-center cursor-pointer"
        >
          <LogoIcon /> Danilo Schleu
        </nav>

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
          {menuItemsMocked.map((item) => {
            return (
              !item.mobile && (
                <nav
                  key={item.text}
                  onClick={() => Scrolling(item.link)}
                  className="flex items-center h-full border-b-2 border-transparent hover:border-primary cursor-pointer"
                >
                  {item.text}
                </nav>
              )
            );
          })}
        </div>

        <Button
          className="hidden md:flex"
          onClick={() => Scrolling(ScrollIds.CONTACT)}
        >
          Entrar em contato
          <ChatCircleIcon />
        </Button>
      </div>
    </div>
  );
};
