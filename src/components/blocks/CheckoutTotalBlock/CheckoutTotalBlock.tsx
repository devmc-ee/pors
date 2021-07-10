import { useState } from 'react';
import { CheckoutButton } from '.';
import useOrderData from '../../../hooks/useOrderData';

import PaymentSelect from '../PaymentSelect/PaymentSelect';
import ModalWindow from '../../shared/portals/ModalWindow';
import { useTranslation } from 'react-i18next';
import { CURRENCY } from '../../../dataSets/CURRENCY';

const CheckoutTotalBlock = (): JSX.Element => {
    const { t } = useTranslation();
    const { totalSum } = useOrderData();
    const [payment, set] = useState(false);

    const handleClick = () => {
        set((prev) => !prev);
    };
    return (
        <>
            <CheckoutButton totalSum={totalSum} onClick={handleClick} currency={CURRENCY.EUR.symbol} />
            {payment && (
                <ModalWindow
                    isOpen={!!payment}
                    handleOpen={handleClick}
                    id="payment-modal"
                    headerText={t('paymentSelect.header')}
                >
                    <PaymentSelect />
                </ModalWindow>
            )}
        </>
    );
};

export default CheckoutTotalBlock;
