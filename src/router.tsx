import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { Experiences } from "./pages/Experiences";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};
