interface NavProps {
  text: string;
  link: string;
}
export const Nav = ({ link, text }: NavProps) => {
  return (
    <nav className="border-b-gray-100 hover:border-b  hover:text-gray-100 hover:text-xl transition-all duration-500 h-10 flex justify-center items-center">
      <a href={link}>{text}</a>
    </nav>
  );
};
