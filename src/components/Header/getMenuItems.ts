import { useTranslation } from "react-i18next";

interface iMenu {
  title: string;
  link: string;
}

export const getMenuItems = (): iMenu[] => {
  const [translate] = useTranslation();

  return [
    {
      title: translate("menu>aboutMe"),
      link: "/#aboutMe",
    },
    {
      title: translate("menu>experiences"),
      link: "/experiences",
    },
    {
      title: translate("menu>projects"),
      link: "/projects",
    },
  ];
};
