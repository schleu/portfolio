import { Outlet } from "react-router-dom";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultLayout = () => {
  return (
    <div className="w-full font-sora text-white bg-[#121212]">
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};
