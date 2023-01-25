import "react-i18next";

import translationPtBr from "../public/locales/pt-BR/common.json";
import translationEn from "../public/locales/en/common.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      ptBR: typeof translationPtBr;
      en: typeof translationEn;
    };
    defaultNS: "ptBR";
  }
}
