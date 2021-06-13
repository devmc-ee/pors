import { OrderedItem } from '../types/order';
import MENU from '../__mock_data__/MENU';

const useMenuData = (): UseMenuDataReturnType => {
	const priceList = MENU.map(({ code, price }) => {
		return { [code]: price };
	});
	const getPriceBy = (itemCode: string | keyof OrderedItem) => {
		const item = MENU.filter(({ code }) => code === itemCode);
		return item && item.length > 0 ? item[0].price : 0;
	};
	return { priceList, getPriceBy };
};
export default useMenuData;

type UseMenuDataReturnType = {
	priceList: {
		[x: string]: number;
	}[];
	getPriceBy: (itemCode: string | keyof OrderedItem) => number;
};
