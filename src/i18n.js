import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

i18n
  .use(LanguageDetector) // détecte la langue du navigateur
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    fallbackLng: "fr", // langue par défaut si détection échoue
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
