import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import et from './translations/et.json';

const resources = {
	en: {
		translation: en,
	},
	et: {
		translation: et,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false, // react already safes from xss
	},
});
export default i18n;
