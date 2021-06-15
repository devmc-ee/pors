import { PriceType } from './price';

export type ProductItem = PriceType & {
	code: string;
	name: string;
	menuNumber: string;
};

export interface Product extends ProductItem {
	id: number;
	description?: string;
	catergory: string;
}
