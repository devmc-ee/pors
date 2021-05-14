import { useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import useMenuData from './useMenuData';

const useOrderData = () => {
    const { getPriceBy } = useMenuData();
    const { order } = useSelector(({ orderStates }: AppState) => orderStates);

    let totalSum = 0;

    for (const code of order) {
        const itemPrice = getPriceBy(code);
        totalSum += itemPrice;
    }

    return { totalSum: totalSum.toFixed(2) };
};
export default useOrderData;
