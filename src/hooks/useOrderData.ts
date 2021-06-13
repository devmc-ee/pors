import { useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import { OrderedItem } from '../types/order';
import useMenuData from './useMenuData';

const useOrderData = (): UseOrderDataReturnType => {
	const { getPriceBy } = useMenuData();
	const { order } = useSelector(({ orderStates }: AppState) => orderStates);

	let totalSum = 0;

	for (const code of order) {
		//@ts-ignore
		const itemPrice = getPriceBy(code as keyof OrderedItem);
		totalSum += itemPrice;
	}

	return { totalSum: totalSum.toFixed(2) };
};
export default useOrderData;

type UseOrderDataReturnType = {
	totalSum: string;
};
