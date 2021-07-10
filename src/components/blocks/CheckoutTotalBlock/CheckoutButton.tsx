import { useTranslation } from 'react-i18next';
import { InlineIcon } from '@iconify/react';

import shoppingCartOutline from '@iconify/icons-eva/shopping-cart-outline';

import { CURRENCY } from '../../../dataSets/CURRENCY';

export interface CheckoutButtonProps {
    totalSum: string;
    currency: string;
    onClick: () => void;
}
export const CheckoutButton = ({ totalSum, currency, onClick }: CheckoutButtonProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <button className="checkout-total-button" onClick={onClick}>
            <div className="checkout-total-button__payment-icon-wrapper">
                <InlineIcon icon={shoppingCartOutline} className="checkout-total-button__payment-icon" />
                <span className="checkout-total-button__payment-text">{t('checkoutButton.label')}</span>
            </div>
            <div className="button-pay-icon-value-wrapper">
                <span className="button-pay-value button-inner-item"> {totalSum}</span>
                <span className="button-pay-currency button-inner-item"> {CURRENCY.EUR.symbol}</span>
            </div>
        </button>
    );
};
