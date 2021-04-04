import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';

const OrderList = () => {
    const { order } = useSelector(({ order }: AppState) => order);
    const orderList = [];

    for (const item in order) {
        orderList.push(
            <div key={item}>
                {item}:{order[item]}
            </div>,
        );
    }
    return <> {orderList}</>;
};
export default OrderList;
