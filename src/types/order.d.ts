import { ProductItem } from './product';

export interface OrderedItemType extends ProductItem {
    amount: number
};
export interface Order {
    order: ProductItem[];
}
