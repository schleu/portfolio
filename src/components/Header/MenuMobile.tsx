import CloseIcon from "../../assets/close.svg";
import classNames from "classnames";
import { getMenuItems } from "./getMenuItems";
import { NavMobile } from "./Nav";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const MenuMobile = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuItems = getMenuItems();

  return (
    <div
      className={classNames(
        "absolute top-0 left-0 h-screen bg-secondary transition-all duration-500 ease-in-out overflow-hidden",
        isOpen ? "w-screen py-20" : "w-0"
      )}
    >
      <AiOutlineCloseCircle
        className="cursor-pointer h-10 w-10 absolute top-5 right-10"
        onClick={() => onClose()}
      />

      <div className={"flex flex-col gap-2 py-4 w-full"}>
        {menuItems.map((item) => (
          <NavMobile
            key={item.title}
            text={item.title}
            link={item.link}
            onClick={() => onClose()}
          />
        ))}
      </div>
    </div>
  );
};
