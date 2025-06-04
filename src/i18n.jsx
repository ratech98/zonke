import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from './utils/translation/en.json'


i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: { translation: en },
    },
    debug: true,
    lng: 'en',
    fallbackLng: "en",
    nonExplicitSupportedLngs: true,
    interpolation: {
        escapeValue: false
    },
    detection: {
        caches: ['cookie']
    },
    react: { useSuspense: false }
})