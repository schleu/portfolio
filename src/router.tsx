import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};
