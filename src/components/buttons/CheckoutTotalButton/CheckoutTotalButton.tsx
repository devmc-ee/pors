import { useState } from 'react';
import { CheckoutButton } from '.';
import useOrderData from '../../../hooks/useOrderData';

import PaymentSelect from '../../sets/PaymentSelect/PaymentSelect';
import Portal from '../../portals/Portal';

const CheckoutTotalButton = (): JSX.Element => {
    const { totalSum } = useOrderData();
    const [payment, set] = useState(false);

    const handleClick = () => {
        set((prev) => !prev);
    };
    return (
        <>
            <CheckoutButton totalSum={totalSum} onClick={handleClick} />
            {payment && (
                <Portal id="payment-modal">
                    <PaymentSelect onClick={() => set((prev) => !prev)} />
                </Portal>
            )}
        </>
    );
};

export default CheckoutTotalButton;
