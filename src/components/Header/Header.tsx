import classnames from "classnames";
import { useState } from "react";
import { useWindowScroll } from "react-use";
import HamburguerMenuIcon from "../../assets/hamburguer.svg";
import { ReactComponent as Icon } from "../../assets/icon.svg";
import { getMenuItems } from "./getMenuItems";
import { MenuMobile } from "./MenuMobile";
import { Nav } from "./Nav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowScroll = useWindowScroll();
  const scrolled = windowScroll.y > 0;

  const handleOpenMenu = () => {
    setIsOpen((state) => !state);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = getMenuItems();

  return (
    <div
      className={classnames(
        "w-full fixed top-0 left-0 flex justify-center transition-all duration-700 z-10",
        scrolled ? "bg-green-360/80 shadow-lg" : "bg-green-360"
      )}
    >
      <div className="flex justify-between text-white gap-4 px-10 py-6 w-full max-w-[1440px] font-bold">
        <a href="/" className="flex items-center gap-2 text-2xl lg:pr-60 ">
          <Icon className="w-8 h-8" />
          Danilo Schleu
        </a>

        <div className="block sm:hidden cursor-pointer">
          <img
            src={HamburguerMenuIcon}
            className="w-10"
            onClick={() => handleOpenMenu()}
          />
        </div>
        <MenuMobile
          isOpen={isOpen}
          onClose={() => {
            closeMenu();
          }}
        />

        <div className="hidden sm:flex justify-between flex-1">
          {menuItems.map((item) => (
            <Nav key={item.title} text={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};
