import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { AppRoutes } from "./constant/AppRoutes";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Project";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.PROJECT} element={<Projects />} />
      </Route>
    </Routes>
  );
};
