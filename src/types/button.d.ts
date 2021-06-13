import { ProductItem } from './product';

export type MenuItemButtonType = ProductItem & {
	classes?: string;
};

export interface MenuButtonProps extends MenuItemButtonType {
	addedToCartAmount: number;
	onClick: () => void;
}
