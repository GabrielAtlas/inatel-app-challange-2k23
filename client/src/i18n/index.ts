import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/en-us.json'
import ptBrTranslation from './locales/pt/pt-br.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'pt',
    fallbackLng: 'en',
    debug: true,
    resources: {
      pt: {
        translation: ptBrTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
