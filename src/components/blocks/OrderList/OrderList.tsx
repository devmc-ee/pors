import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import OrderItem from './OrderItem';
import MENU from '../../../__mock_data__/MENU';
import { ProductItem } from '../../../types/product';

const OrderList = (): JSX.Element => {
    const EMPTY_CART_TEXT = 'Nothing added yet';
    const { order } = useSelector(({ orderStates }: AppState) => orderStates);
    const orderList = [];

    for (const code in order) {
        const product = MENU.filter(({ code: itemCode }: ProductItem) => itemCode === code);
        const orderedAmount = order[code];

        const args = {
            ...product[0],
            amount: orderedAmount,
        };

        const orderedItems = orderList.filter((item) => item.key === code);

        if (orderedItems.length === 0) orderList.push(<OrderItem key={code} {...args} />);
    }

    return (
        <>
            <div className="order-area__header">
                <span className="order-area__header-item order-area__header-product-code">#</span>
                <span className="order-area__header-item order-area__header-product-title">Product</span>

                <span className="order-area__header-item order-area__header-amount-title"> Amount</span>

                <span className="order-area__header-item order-area__header-price-title">Total Price</span>
            </div>
            {orderList.length > 0 ? orderList : <div className="empty-area">{EMPTY_CART_TEXT}</div>}
        </>
    );
};
export default OrderList;
