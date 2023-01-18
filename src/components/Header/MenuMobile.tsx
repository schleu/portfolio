import CloseIcon from "../../assets/close.svg";
import classNames from "classnames";
import { menuItems } from "../../constants/menu";
import { NavMobile } from "./Nav";

export const MenuMobile = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={classNames(
        "absolute top-0 left-0 bg-green-350 w-screen h-screen shadow-lg rounded-xl flex flex-col gap-2 py-4 transition-all duration-150",
        isOpen ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <div className="w-full flex justify-end px-10">
        <div
          className="border border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
          onClick={() => onClose()}
        >
          <img src={CloseIcon} className="w-6" />
        </div>
      </div>
      {menuItems.map((item) => (
        <NavMobile
          key={item.title}
          text={item.title}
          link={item.link}
          onClick={() => onClose()}
        />
      ))}
    </div>
  );
};
