interface NavProps {
  text: string;
  link: string;
  onClick?: () => void;
}
export const Nav = ({ link, text }: NavProps) => {
  return (
    <nav className="border-b-third hover:border-b hover:text-thborder-b-third hover:text-xl transition-all duration-500 h-10 flex justify-center items-center">
      <a href={link}>{text}</a>
    </nav>
  );
};

export const NavMobile = ({ link, text, onClick = () => {} }: NavProps) => {
  return (
    <nav
      className="border-b-third h-10 flex justify-center items-center"
      onClick={() => onClick()}
    >
      <a href={link} className="text-2xl">
        {text}
      </a>
    </nav>
  );
};
