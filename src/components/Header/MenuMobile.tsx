import classNames from "classnames";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLockBodyScroll } from "react-use";

interface MenuItem {
  text: string;
  link: string;
  onClick?: () => void;
}
interface iMenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}
export const MenuMobile = ({ isOpen, onClose, items }: iMenuMobileProps) => {
  useLockBodyScroll(isOpen);

  return (
    <div
      className={classNames(
        "h-screen fixed top-0 left-0 z-50 bg-light-900 dark:bg-dark-300 flex flex-col overflow-hidden py-8 ",
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
        <div
          key={item.text}
          className="w-full py-5 px-2.5 border-b-2 border-transparent hover:border-primary cursor-pointer"
        >
          <Link to={item.link}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
};
