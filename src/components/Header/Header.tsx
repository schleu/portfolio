import classnames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowScroll } from "react-use";

import { getMenuItems } from "./getMenuItems";
import { MenuMobile } from "./MenuMobile";
import { Nav } from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsHexagon } from "react-icons/bs";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowScroll = useWindowScroll();
  const scrolled = windowScroll.y > 0;
  const [translate] = useTranslation();

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
        scrolled ? "bg-primary/80 shadow-lg" : "bg-primary"
      )}
    >
      <div className="flex justify-between text-third gap-4 px-10 py-6 w-full max-w-[1440px] font-bold">
        <a href="/" className="flex items-center gap-2 text-2xl lg:pr-60 ">
          <BsHexagon className="w-8 h-8 rotate-90" />
          {translate("menu>title")}
        </a>

        <div className="block sm:hidden cursor-pointer">
          <RxHamburgerMenu
            className="w-7 h-7"
            onClick={() => handleOpenMenu()}
          />
        </div>
        <MenuMobile
          isOpen={isOpen}
          onClose={() => {
            closeMenu();
          }}
        />

        <div className="hidden sm:flex justify-between flex-1 max-w-[400px]">
          {menuItems.map((item) => (
            <Nav key={item.title} text={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};
