import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./translations/en.json";
import brJson from "./translations/ptBR.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBR: brJson,
    en: enJson,
  },
});

export default i18n;
