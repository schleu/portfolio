import CloseIcon from "../../assets/close.svg";
import classNames from "classnames";

const menuItems: NavProps[] = [
  {
    text: "Sobre Mim",
    link: "#aboutMe",
  },
  {
    text: "Habilidades",
    link: "#habilit",
  },
  {
    text: "Projetos",
    link: "#projects",
  },
  {
    text: "Contato",
    link: "#contact",
  },
];

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
        <Nav
          key={item.text}
          text={item.text}
          link={item.link}
          onClick={() => onClose()}
        />
      ))}
    </div>
  );
};

interface NavProps {
  text: string;
  link: string;
  onClick?: () => void;
}

export const Nav = ({ link, text, onClick = () => {} }: NavProps) => {
  return (
    <nav
      className=" hover:text-gray-100 hover:text-xl transition-all duration-500 h-10 flex justify-center items-center"
      onClick={() => onClick()}
    >
      <a href={link} className="text-2xl">
        {text}
      </a>
    </nav>
  );
};
