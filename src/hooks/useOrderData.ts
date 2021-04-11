import { useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import useMenuData from './useMenuData';

const useOrderData = () => {
    const { priceList } = useMenuData();
    const { order } = useSelector(({ orderStates }: AppState) => orderStates);

    let totalSum = 0;

    for (const item in order) {
        const orderedAmountValue = order[item];
        const itemPrice = priceList.filter((itemPrice) => item === Object.keys(itemPrice)[0])[0];
        const itemPriceValue = itemPrice[item];
        totalSum += itemPriceValue * orderedAmountValue;
    }

    return { totalSum: totalSum.toFixed(2) };
};
export default useOrderData;
