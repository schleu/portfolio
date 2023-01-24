import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import { Hero } from "../Hero";

export const DefaultLayout = () => {
  return (
    <div className="bg-[#c3c3c3] w-full relative font-techMono flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};
