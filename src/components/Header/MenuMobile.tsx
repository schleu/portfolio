import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, scroller } from "react-scroll";
import { useLockBodyScroll } from "react-use";

interface iMenuItem {
  text: string;
  link: string;
  onClick: () => void;
  mobile?: boolean;
}
interface iMenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
  items: iMenuItem[];
}

export const MenuMobile = ({ isOpen, onClose, items }: iMenuMobileProps) => {
  useLockBodyScroll(isOpen);

  return (
    <div
      className={classNames(
        "h-screen fixed top-0 left-0 z-50 bg-dark-300 flex flex-col overflow-hidden py-8 ",
        "transition-all duration-500",
        isOpen ? "w-full" : "w-0"
      )}
    >
      <div className="w-full flex justify-end px-2.5">
        <AiOutlineCloseCircle
          onClick={onClose}
          className="h-8 w-8 cursor-pointer"
        />
      </div>
      {items.map((item) => (
        <MenuItem key={item.text} {...item} onClick={onClose} />
      ))}
    </div>
  );
};

const MenuItem = ({ text, link, onClick }: iMenuItem) => {
  const { t } = useTranslation();
  const handleClick = () => {
    scroller.scrollTo(link, {
      smooth: true,
    });
    onClick();
  };
  return (
    <div
      key={text}
      className="w-full py-5 px-2.5 border-b-2 border-transparent hover:border-primary cursor-pointer"
      onClick={() => handleClick()}
    >
      <nav onClick={() => handleClick()}>{t(`header.menu.${text}`)}</nav>
    </div>
  );
};
