import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        mainText: 'Welcome to Main page!'
      }
    },
    ru: {
      translation: {
        mainText: 'Приветствую на главной!'
      }
    }
  }
});

const languageButton = document.getElementById('langButton');
const translatedText = document.getElementById('translatedText');

languageButton.addEventListener('click', () => {
  const currentLanguage = i18next.language === 'en' ? 'ru' : 'en';
  i18next.changeLanguage(currentLanguage);
  translatedText.textContent = i18next.t('mainText');
});

i18next.on('languageChanged', () => {
  translatedText.textContent = i18next.t('mainText');
});
