import { CURRENCY } from '../dataSets/CURRENCY';
import { ProductItem } from '../types/product';

export const MENU: ProductItem[] = [
    {
        code: '1',
        name: 'BRAISED PORK NOODLE SOUP',
        price: 6,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '2',
        name: 'BRAISED PORK SOUP',
        price: 10,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '3',
        name: 'RICE PORK SOUP',
        price: 5,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '4',
        name: 'PORK WONTON',
        price: 27,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '5',
        name: 'BRAISED BEEF NOODLE SOUP',
        price: 17,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '6',
        name: 'BRAISED BEEF SOUP',
        price: 6,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '7',
        name: 'RED PORK SOUP WITH HANDMADE GREEN NOODLE',
        price: 10,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '8',
        name: 'RED PORK SOUP WITH HANDMADE YELLOW NOODLE',
        price: 5,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '9',
        name: 'KHAO MOO DENG + PORK SOUP STOCK',
        price: 27,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '10',
        name: 'FRIED BEEF MEATBALLS',
        price: 17,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '11',
        name: 'FRIED PORK MEATBALLS',
        price: 27,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '12',
        name: 'KHAO GAI THOD – BREADED CHICKEN FILLET + CHICKEN SOUP STOCK',
        price: 17,
        currencySymbol: CURRENCY.EUR.symbol,
    },
];
export default MENU;
