import { CURRENCY } from '../../dataSets/CURRENCY';

export const getCurrencySymbol = (code: string): null | string => {
	if (typeof code !== 'string' || code.trim().length === 0) return null;

	const currencyCode = code.trim().toUpperCase();
	if (!(currencyCode in CURRENCY)) return currencyCode;

	return CURRENCY[currencyCode].symbol;
};
