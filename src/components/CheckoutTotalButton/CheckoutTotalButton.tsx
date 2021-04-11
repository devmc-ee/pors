import { InlineIcon } from '@iconify/react';
import shoppingCartOutline from '@iconify/icons-eva/shopping-cart-outline';
import useOrderData from '../../hooks/useOrderData';
import { CURRENCY } from '../../dataSets/CURRENCY';

const CheckoutTotalButton = () => {
    const { totalSum } = useOrderData();

    const PAYMENT_TEXT = 'Pay';
    return (
        <button className="checkout-total-button">
            <div className="checkout-total-button__payment-icon-wrapper">
                <InlineIcon icon={shoppingCartOutline} className="checkout-total-button__payment-icon" />

                <span className="checkout-total-button__payment-text">{PAYMENT_TEXT}</span>
            </div>
            <div className="button-pay-icon-value-wrapper">
                <span className="button-pay-value button-inner-item"> {totalSum}</span>
                <span className="button-pay-currency button-inner-item"> {CURRENCY.EUR.symbol}</span>
            </div>
        </button>
    );
};

export default CheckoutTotalButton;
