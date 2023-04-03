import { Outlet } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { ScrollIds } from "../../constant/ScrollIds";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultLayout = () => {
  const windowScroll = useWindowScroll();
  return (
    <div className="">
      <div
        className="w-full font-sora text-dark-100 bg-dark-900  overflow-x-hidden"
        id={ScrollIds.HOME}
      >
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
