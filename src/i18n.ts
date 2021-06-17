import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { PAYMENT_SELECT } from './components/sets/PaymentSelect/PaymentSelect.i18n';

const resources = {
	en: {
		translation: {
			paymentSelect: PAYMENT_SELECT.en,
			checkoutButton: {
				label: 'Payment',
			},
		},
	},
	et: {
		translation: {
			paymentSelect: PAYMENT_SELECT.et,
			checkoutButton: {
				label: 'Tasumine',
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
