import { Outlet } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultLayout = () => {
  const windowScroll = useWindowScroll();
  return (
    <div className="">
      <div className="w-full font-sora text-dark-900 dark:text-dark-100 bg-light-900 dark:bg-dark-900  overflow-x-hidden">
        <Header />
        <div className={windowScroll ? "mt-[70px]" : ""}>
          <Outlet />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
