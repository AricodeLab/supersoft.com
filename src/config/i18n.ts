import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from '../../public/locale/en.json'
import PT from '../../public/locale/pt.json'

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: PT
    }
    ,
    en: {
      translation: EN
    }
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;