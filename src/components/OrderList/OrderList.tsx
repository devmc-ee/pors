import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import OrderItem from '../OrderItem';
import MENU from '../../__mock_data__/MENU';
import { ProductItem } from '../../types/product';
const OrderList = (): JSX.Element => {
    const { order } = useSelector(({ order }: AppState) => order);
    const orderList = [];

    for (const item in order) {
        const product = MENU.filter((menuItem: ProductItem) => menuItem.code === item);

        const args = {
            ...product[0],
            amount: order[item],
        };
        orderList.unshift(<OrderItem key={item} {...args} />);
    }
    return <> {orderList}</>;
};
export default OrderList;
