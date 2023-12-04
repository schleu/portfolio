import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Scrolling } from "./components/Scrolling";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

export const Home = () => {
  return (
    <div className="flex flex-col items-center" id="home">
      <Hero />
      <Scrolling />
      {/* <Services /> */}
      <Portfolio />
      <About />
      <Skills />
    </div>
  );
};
