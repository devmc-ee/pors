import { CURRENCY } from '../dataSets/CURRENCY';
import { ProductItem } from '../types/product';

export const MENU: ProductItem[] = [
    {
        code: '1',
        name: 'Braised Pork Noodle Soup 1',
        price: 6,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '2',
        name: 'Braised Pork Noodle Soup 2',
        price: 10,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '3',
        name: 'Braised Pork Noodle Soup 3',
        price: 5,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '4',
        name: 'Braised Pork Noodle Soup',
        price: 27,
        currencySymbol: CURRENCY.EUR.symbol,
    },
    {
        code: '5',
        name: 'Braised Pork Noodle Soup 4',
        price: 17,
        currencySymbol: CURRENCY.EUR.symbol,
    },
];
export default MENU;