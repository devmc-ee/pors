import { ProductItem } from './product';

export interface OrderedItemType extends ProductItem {
    amount: number
};
export interface Order extends OrderedItem {}

export interface OrderedItem {
    [code: string]: number;
}