import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const nameSpaces = {
  global: 'global'
};

export const supportedLanguages = ['es', 'en'];

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    interpolation: { escapeValue: false },
    supportedLngs: supportedLanguages,
    fallbackLng: ['es', 'en'],
    lng: ['es'], //Para indicar lenguaje por defecto en lugar de autodetectar el idioma del navegador
    ns: [
      nameSpaces.global
    ],
    defaultNS: nameSpaces.global,
    backend: {
      loadPath: `locale/{{lng}}/{{ns}}.json`,
      crossDomain: true,
    },
  });
