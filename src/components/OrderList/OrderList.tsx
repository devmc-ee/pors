import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import OrderItem from '../OrderItem';
import MENU from '../../__mock_data__/MENU';
import { ProductItem } from '../../types/product';

import './styles/OrderList.css';
const OrderList = (): JSX.Element => {
    const { order } = useSelector(({ order }: AppState) => order);
    const orderList = [];

    for (const item in order) {
        const product = MENU.filter((menuItem: ProductItem) => menuItem.code === item);

        const args = {
            ...product[0],
            amount: order[item],
        };
        orderList.push(<OrderItem key={item} {...args} />);
    }
    return (
        <>
            <div className="order-area__header">
                <span className="order-area__header-item order-area__header-product-title">Product</span>

                <span className="order-area__header-item order-area__header-amount-title"> Amount</span>

                <span className="order-area__header-item order-area__header-price-title">Total Price</span>
            </div>
            {orderList.length > 0 ? orderList : <div className="empty-area">Nothing yet</div>}
        </>
    );
};
export default OrderList;
