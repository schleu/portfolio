import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationPtBr from "../public/locales/pt-BR/common.json";
import translationEn from "../public/locales/en/common.json";

const i18n = createInstance({
  resources: {
    en: {
      translation: translationEn,
    },
    ptBr: {
      translation: translationPtBr,
    },
  },
  lng: "ptBr",
  fallbackLng: "ptBr",
  interpolation: { escapeValue: false },
});

i18n.use(initReactI18next).use(LanguageDetector).init();

export default i18n;
