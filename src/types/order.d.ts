import { ProductItem } from './product';

export interface OrderItem {
    code: string;
    amount: number;
}
export interface Order {
    order: ProductItem[];
}
