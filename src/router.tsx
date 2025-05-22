import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { AppRoutes } from "./constant/AppRoutes";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectsDetail } from "./pages/ProjectsDetail";
import { PomodoroPage } from "./pages/Pomodoro";
import { TelegramPage } from "./pages/Telegram";
import { AboutPage } from "./pages/About";
import TodoPage from "./pages/Todo";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.PROJECTS} element={<Projects />} />
        <Route path={AppRoutes.PROJECT} element={<ProjectsDetail />} />
        <Route path={AppRoutes.POMODORO} element={<PomodoroPage />} />
        <Route path={AppRoutes.TELEGRAM} element={<TelegramPage />} />
        <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
        <Route path={AppRoutes.TODO} element={<TodoPage />} />
      </Route>
    </Routes>
  );
};
