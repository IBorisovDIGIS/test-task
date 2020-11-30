import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';
import ru from './translations/ru.json';
import { languages } from '../constants';

i18n.use(initReactI18next)
  .init({
    resources: { en, fr, ru },
    lng: languages[0],
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
