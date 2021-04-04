import { OrderedItemType } from '../../types/order';
import './styles/OrderItem.css';

const OrderItem = ({ name, code, price, currencySymbol, amount }: OrderedItemType): JSX.Element => {
    const sum = (amount * price).toFixed(2);
    return (
        <button className="order-item-btn">
            <div className="order-item-btn__name  order-item-btn__inner-wrapper">
                <div className="order-item-btn__name-main order-item-btn__text--bold">{name}</div>
                <div className="order-item-btn__name-secondary">#{code}</div>
            </div>
            <div className="order-item-btn__value order-item-btn__inner-wrapper">
                <div className="order-item-btn__value-amount order-item-btn__text--bold">x{amount}</div>
                <div className="order-item-btn__value-prices-wrapper">
                    <div className="order-item-btn__value-sum order-item-btn__text--bold">
                        {sum}
                        {currencySymbol}
                    </div>
                    <div className="order-item-btn__value-price">
                        {price}
                        {currencySymbol}
                    </div>
                </div>
            </div>
        </button>
    );
};
export default OrderItem;
