import { CURRENCY } from '../dataSets/CURRENCY';
import { ProductItem } from '../types/product';

export const MENU: ProductItem[] = [
	{
		code: 'TF1',
		menuNumber: '1',
		name: 'BRAISED PORK NOODLE SOUP',
		price: 6,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		menuNumber: '2',
		code: 'TF2',
		name: 'BRAISED PORK SOUP',
		price: 10,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		menuNumber: '3',
		code: 'TF3',
		name: 'RICE PORK SOUP',
		price: 5,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF4',
		menuNumber: '4',
		name: 'PORK WONTON',
		price: 27,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF5',
		menuNumber: '5',
		name: 'BRAISED BEEF NOODLE SOUP',
		price: 17,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF6',
		menuNumber: '6',
		name: 'BRAISED BEEF SOUP',
		price: 6,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF7',
		menuNumber: '7',
		name: 'RED PORK SOUP WITH HANDMADE GREEN NOODLE',
		price: 10,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF8',
		menuNumber: '8',
		name: 'RED PORK SOUP WITH HANDMADE YELLOW NOODLE',
		price: 5,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF9',
		menuNumber: '9',
		name: 'KHAO MOO DENG + PORK SOUP STOCK',
		price: 27,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF10',
		menuNumber: '10',
		name: 'FRIED BEEF MEATBALLS',
		price: 17,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF11',
		menuNumber: '11',
		name: 'FRIED PORK MEATBALLS',
		price: 27,
		currencySymbol: CURRENCY.EUR.symbol,
	},
	{
		code: 'TF12',
		menuNumber: '12',
		name: 'KHAO GAI THOD – BREADED CHICKEN FILLET + CHICKEN SOUP STOCK',
		price: 17,
		currencySymbol: CURRENCY.EUR.symbol,
	},
];
export default MENU;
