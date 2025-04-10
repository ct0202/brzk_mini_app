import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPL from './locales/pl.json';
import translationRU from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: translationPL },
    ru: { translation: translationRU },
  },
  lng: 'pl', // язык по умолчанию
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
