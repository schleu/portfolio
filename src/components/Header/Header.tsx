import Icon from "../../assets/icon.svg";
import { useWindowScroll } from "react-use";
import classnames from "classnames";
import { Nav } from "./Nav";

export const Header = () => {
  const windowScroll = useWindowScroll();
  const scrolled = windowScroll.y > 0;

  return (
    <div
      className={classnames(
        "flex justify-between text-white font-roboto px-10 py-6 fixed top-0 left-0 w-full transition-all duration-700 font-bold",
        scrolled ? "bg-green-360/80 shadow-lg" : "bg-transparent"
      )}
    >
      <a href="" className="flex items-center gap-2 text-2xl pr-60">
        <img src={Icon} className="h-8" />
        Danilo Schleu
      </a>

      <div className="flex justify-between flex-1">
        <Nav text="Sobre mim" link="#aboutMe" />
        <Nav text="Habilidades" link="#habilit" />
        <Nav text="Projetos" link="#projects" />
        <Nav text="Contato" link="#contact" />
      </div>
    </div>
  );
};
