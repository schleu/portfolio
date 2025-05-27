import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

export const LanguageButton = () => {
  const { i18n } = useTranslation();

  const languages = i18n.languages;
  const currentLanguage = i18n.language;

  return (
    <button
      onClick={() =>
        i18n.changeLanguage(currentLanguage === "pt" ? "en" : "pt")
      }
      className="flex items-center gap-2 outline-none w-20"
    >
      <FiGlobe size={20} />
      {currentLanguage?.toUpperCase()}
    </button>
  );
};
