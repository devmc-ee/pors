import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			paymentSelect: {
				header: 'Select payment method',
			},
		},
	},
	et: {
		translation: {
			paymentSelect: {
				header: 'Vali tasumise viis',
			},
		},
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
